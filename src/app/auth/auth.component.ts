import { Component } from '@angular/core';
import { FirebaseService } from '@app/services/firebase/firebase.service';

@Component({
  selector: 'bs-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private db: FirebaseService) {}
  showid = this.db.createId;

  readonly seasons = {
    seasons: [
      {
        quiz: [
          { answer: 'One', question: 'QQQQQ One', alts: ['Two', 'Three', 'Four'] },
          { answer: 'Two', question: 'QQQQQ Two', alts: ['Two', 'C', 'A'] },
          { answer: '3', question: 'QQQQQ Three', alts: ['XXY', 'YYZ', '3'] }
        ],
        season: 1
      },
      {
        quiz: [
          { answer: '555', question: 'QWEASDZXC', alts: ['355', 'AIII', '555'] },
          { answer: '92vh', question: 'VNVBUIJBC', alts: ['89149479', '92vh', 'aca78dv88'] },
          { answer: '1qaz', question: 'QW----ajd ia', alts: ['Unnn', '1qaz', 'Boob'] }
        ],
        season: 2
      }
    ],
    showId: this.showid
  };
  readonly shows = {
      image: 'https://www.gstatic.com/tv/thumb/tvbanners/17420/p17420_b_v8_aa.jpg',
      info: 'A show about a guy who does stuff',
      seasons: 12,
      title: 'the-tit-boob-show'
  };

  async addSeason() {
    const id = this.db.createId;
    return await this.db.db
      .collection('seasons')
      .doc(id)
      .set({ ...this.seasons });
  }
  async addShow() {
    return await this.db.db
      .collection('shows')
      .doc(this.showid)
      .set({ ...this.shows });
  }
}
