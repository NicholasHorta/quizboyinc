import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bs-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {

  ngOnInit(){}

  @Input() placeholder: string = '';
  @Output() changed = new EventEmitter<string>();
  @ViewChild('input') inputValue!: ElementRef;

  value: string | undefined;
  isDisabled: boolean = false;

  private propogateChange: any = () => {}
  private propogateTouched: any = () => {}

  writeValue(value: string): void {
      this.value = value;
  }
  registerOnChange(fn: any): void {
   this.propogateChange = fn;
  }

  registerOnTouched(fn: any): void {
      this.propogateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
      this.isDisabled = isDisabled;
  }

  onKeyUp(): void{
    const value = this.inputValue.nativeElement.value
    this.value = value;
    this.propogateChange(value)
    this.changed.emit(value);
  }

  onBlur():void {
    this.propogateTouched()
  }
}
