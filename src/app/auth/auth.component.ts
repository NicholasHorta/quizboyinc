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
    "showId": "",
    "preface": "",
    "seasons": [
      {
        "season": 1,
        "quiz": [
          {
            "question": "What creature is the first to escape Dr Weirds lab?",
            "answer": "Rabbot",
            "alts": ["Mothmonster Man", "The Brownie Monsters", "Waltermelon"]
          },
          {
            "question": "What machine do the leprechauns steal from Dr Weird?",
            "answer": "RainbowMaker 400",
            "alts": ["Toaster 7000", "A Blender", "A Shrink Ray"]
          },
          {
            "question": "What vampire movie is Shake watching?",
            "answer": "Assisted Living Dracula",
            "alts": ["Bram Stokers Dracula", "Vampirus", "Elvis Dracula"]
          },
          {
            "question": "Meatwad gets given a clown tattoo by the Mooninites, which symbolises what?",
            "answer": "Street Warfare",
            "alts": ["A Moon Warrior", "Paedophilia", "A Certified Clown"]
          },
          {
            "question": "When Carl and Frylock return from a black hole, what effect has it had on Carl?",
            "answer": "His Hands are Gigantic",
            "alts": ["His Feet are Gigantic", "He's a Dwarf", "His Voice Changes"]
          },
          {
            "question": "When Frylock makes contact with the Plutonians, what song does he play the first few notes of on his keyboard?",
            "answer": "La Cucaracha",
            "alts": [
              "Clair de Lune",
              "Metallica - Battery",
              "Bah Bah Black Sheep"
            ]
          },
          {
            "question": "What mould based creature is the result of Shake leaving the kitchen in a mess?",
            "answer": "Ol' Drippy",
            "alts": ["Droopy Bob", "Ol' Bob", "Mr Mould"]
          },
          {
            "question": "What Foreigner song title do the Mooninites use with the Foreigner belt to Freeze Carl?",
            "answer": "Cold As Ice",
            "alts": ["Like Ice", "The Freeze", "Colder"]
          },
          {
            "question": "What creature does McPeePants turn out to be?",
            "answer": "A Spider",
            "alts": ["A Cow", "A Fly", "An Old Man"]
          },
          {
            "question": "Which of Meatwads dolls comes equiped with night vision goggles?",
            "answer": "Jiggle Billy",
            "alts": ["Happy Time Harry", "Boxy Brown", "Vanessa"]
          },
          {
            "question": "Who do the Plutonians make a clone of?",
            "answer": "Master Shake",
            "alts": ["Frylock", "Carl", "Meatwad"]
          },
          {
            "question": "What shape does Meatwad unveil to Randy the Astonishing before being unable to perform?",
            "answer": "Samurai Lincoln",
            "alts": ["Hotdog", "Igloo", "Dr Weird"]
          },
          {
            "question": "When they find a mummy under the house, Frylock instructs Meatwad to never do what to a mummy?",
            "answer": "Hug",
            "alts": ["Kiss", "Shake Hands", "Dance"]
          },
          {
            "question": "When Carl provides Frylock with a brain for Meatwad, the brain was extracted from who?",
            "answer": "Steve",
            "alts": ["Master Shake", "Terry", "Carl"]
          },
          {
            "question": "Who is the green-skinned man with a long white beard who appears in the teleconferencing window?",
            "answer": "The Wwwyzzerd.com",
            "alts": ["The Internet Guru", "The Wizard.com", "TheReBufferEr"]
          },
          {
            "question": "Shake exclaims that his PDA was stolen by Romulox who is supposedly what?",
            "answer": "Ruler of the Tar Creatures",
            "alts": ["Ruler of the Adirondacks", "Ruler of the Replicants", "A Member of the Brownie Monsters"]
          },
          {
            "question": "What do Carl & Master Shake purchase from Chechnya?",
            "answer": "A Mail Order Bride",
            "alts": ["A Train Set for Meatwad", "Soviet Weapons", "Limited Edition Beer"]
          },
          {
            "question": "Why is Carl's pool filled with blood?",
            "answer": "Carl's house was built on elf graves",
            "alts": ["Master Shake filled it with blood", "A curse from a mummy", "Carl murdered a hooker"]
          }
        ]
      },
      {
        "season": 2,
        "quiz": [
          {
            "question": "Who kills Meatwads pet snake?",
            "answer": "Frylock",
            "alts": ["Master Shake", "Carl", "Ignignokt & Err"]
          },
          {
            "question": "What is the name of Master Shake's created super hero?",
            "answer": "The Drizzle",
            "alts": ["The Flood", "The Shook", "Mr Mister"]
          },
          {
            "question": "When Meatwad wins 2 Super Bowl tickets in a pack of Enchiladitos, who does he take?",
            "answer": "Boxy Brown",
            "alts": ["Carl", "Dewey", "Frylock"]
          },
          {
            "question": "When Frylock develops a spherical supercomputer that he calls the OoGhiJ MIQtxxXA, it ends up in the hands of a caveman named...",
            "answer": "Oog",
            "alts": ["Blorf", "Rog", "Ook"]
          },
          {
            "question": "Master Shake travels to Guatemala to get what?",
            "answer": "A nose job",
            "alts": ["A slave", "A wife for Carl", "Drugs"]
          },
          {
            "question": "Travis,a spore that uses his tongue to penetrate Master Shake's skull and use his body to communicate has come to Earth to find what?",
            "answer": "A job with a 401(k) & health insurance",
            "alts": ["A new mate", "A new planet to live on", "To understand the appeal of the band Rush"]
          },
          {
            "question": "Meatwad is addicted what song by Sir Loin?",
            "answer": "4 Da Shorteez",
            "alts": ["Eatin' Ain't Cheatin'", "Steak Over Tonight", "Meatwad's Got the Meat"]
          },
          {
            "question": "When Carl accidentally shoots his foot, where is it re-attached?",
            "answer": "His Head",
            "alts": ["On his hand", "On his chest", "On his back"]
          },
          {
            "question": "When Meatwad gains the ability to see the future, what is the first vision he has?",
            "answer": "The chocolate milk has expired",
            "alts": ["Frylock explodes", "Master Shake wins the lotto", "Carl is murdered"]
          },
          {
            "question": "When Frylock forces Meatwad and Master Shake to watch a DVD with all the worlds knowledge in order to beat Wayne the Brain at trivia, what does Frylock forget to include on the DVD?",
            "answer": "Sports",
            "alts": ["Women", "Science", "The Backstreet Boys"]
          },
          {
            "question": "What creature do the Plutonians release to take control of the Aqua Teens TV?",
            "answer": "The Universal Remonster",
            "alts": ["The Digital Ultra Sponge", "Th Far Gate", "TechnoBot"]
          },
          {
            "question": "When Frylock's toilet kills Carl, they rebuild him entirely out of what organ?",
            "answer": "Eyeballs",
            "alts": ["Testicles", "Livers", "Kidneys"]
          },
          {
            "question": "After Carl and Master Shake deep fry an entire cow for labour day, where do they dump all the oil?",
            "answer": "The forest",
            "alts": ["The ocean", "The Plutonians ship", "The moon"]
          },
          {
            "question": "Master Shake, Zakk Wylde & Geddy Lee create a new birthday song called?",
            "answer": "Spirit Journey Formation Anniversary",
            "alts": ["Solemn Womb Day Part Deux", "Anniversary of Thine Womb Evacuation", "Bitchin' Bdayz"]
          },
          {
            "question": "Who lives in the attic of the Aqua Teens house?",
            "answer": "Willie Nelson",
            "alts": ["Krokus", "Markula", "Waltermelon"]
          },
          {
            "question": "What is the one ingredient that Master Shake refuses to eat on the Broodwich ",
            "answer": "Sundried tomatoes",
            "alts": ["Olives", "Dijon Mustard", "Lettuce"]
          },
          {
            "question": "What does the Kidney foundation give to Meatwad?",
            "answer": "Carls car",
            "alts": ["A Blender", "A new kidney", "Carls Giants tickets"]
          },
          {
            "question": "When Frylock asks the Wisdom Cube to solve a paradox about God?",
            "answer": "Yuh-huh",
            "alts": ["All must be one", "That's a gay question", "In time, all wil be revealed"]
          },
          {
            "question": "The two space aliens DP and Skeeter, members of a space college fraternity crash land at the Aqua Teens house, what is Skeeters real name?",
            "answer": "Zarnold Edward Quigley,",
            "alts": ["Gerald Geraldson Gould", "Partridge Fladdelson Hebley", "Heemerson Hemson Gemson"]
          },
          {
            "question": "Carl wears a wig which slowly turns him into what?",
            "answer": "A clown",
            "alts": ["A genius", "A woman", "A spider"]
          },
          {
            "question": "As Turkitron tells the tale of Goblox, what does he reveal Frances new name to be in the future?",
            "answer": "RoboFrance 29",
            "alts": ["AustraliaFrance", "Turkqui", "FrancoRoost 5000"]
          },
          {
            "question": "After Master Shake upsets Frylock enough that he moves out, Meatwad gets an eye infection and is unable to see. What is the cause?",
            "answer": "Raw chicken",
            "alts": ["Sewage", "Shakes socks", "A rat infestation"]
          },
          {
            "question": "Which president emerges from the cloner and Frylock ultimately shoots?",
            "answer": "Washington",
            "alts": ["Lincoln", "JFK", "Jackson"]
          },
          {
            "question": "Which villains weren't invited to the villains convention hosted by the Mooninites?",
            "answer": "The Plutonians",
            "alts": ["Oog", "The Frat Aliens", "Mothmonster Man"]
          }
        ]
      },
      {
        "season": 3,
        "quiz": [
          {
            "question": "Frylock hires the services of Billy Witch Doctor Dot Com in order to bring who back from the dead?",
            "answer": "Master Shake",
            "alts": ["Carl", "Meatwad", "Himself"]
          },
          {
            "question": "Finish Meatwads line: Hey boy, you said it was a chip... ",
            "answer": "So where's the dip?",
            "alts": ["That's why I ate it", "And it was ranch", "Was I not supposed to eat it?"]
          },
          {
            "question": "The Mooninites come across a gigantic check, which they attempt to cash with Master Shake and Meatwad, however, the check turns out to be what?",
            "answer": "A radioactive bill",
            "alts": ["A court summons", "A poster of Prince", "A moon tour coupon"]
          },
          {
            "question": "When Meatwad proclaims he has been blessed with a child, what does he turn out to be pregnant with?",
            "answer": "Spiders",
            "alts": ["A mini Meatwad", "The Broodwich sandwich", "He's just fat"]
          },
          {
            "question": "Does the e-helmet that Master Shake wears have a built in camera?",
            "answer": "Yes",
            "alts": ["No", "It comes as a plugin only", "Yes, but it only records video"]
          },
          {
            "question": "Where is Little Brittle being homed?",
            "answer": "Tragic Castles",
            "alts": ["Sad Endings", "Crypt Keepers", "The Graveyard"]
          },
          {
            "question": "When money becomes tight, Frylock and Master Shake both get jobs where?",
            "answer": "Slurp-a-Lunch",
            "alts": ["Baby Jap", "Burger Trench", "Being bookies for Carl"]
          },
          {
            "question": "Once you defeat the Gorgotron you become a... ",
            "answer": "Moon Master",
            "alts": ["Goblin Slayer", "Moon Lord", "Douche"]
          },
          {
            "question": "When Carl is on the South Bronx Parasite diet, what organ slips out his body when leaving the Aqua Teen house?",
            "answer": "His liver",
            "alts": ["His heart", "His lungs", "His brain"]
          },
          {
            "question": "What is the name of the stripper that works for the council?",
            "answer": "Dusty Gozongas",
            "alts": ["Champagne Delux", "Cherry Jubilee", "Shmanny Ham"]
          },
          {
            "question": "When Meatwad gains powers with the shirt of the dead it results in who being horrifically burned?",
            "answer": "Santa",
            "alts": ["Master Shake", "The Easter Bunny", "Carl"]
          },
          {
            "question": "What is the only cure to the Hypno Germs?",
            "answer": "Mexican jumping beans",
            "alts": ["Penicillin", "A new brain", "There's no cure"]
          },
          {
            "question": "Who is put in charge of taking care of Boxy, Dewey and Vanessa when the Aqua Teens are away on Meatwads comedy tour?",
            "answer": "Carl",
            "alts": ["Willie Nelson", "The Mooninites", "The Plutonians"]
          },
          {
            "question": "Spacecataz is based on a rivaly between who?",
            "answer": "Mooninites & Plutonians",
            "alts": ["The Brownie Monsters & Frat aliens", "The Mooninites & The Frat Aliens", "The Plutonians & Allen"]
          },
          {
            "question": "In Spacecataz, how many pizzas are ordered to the Mooninites ship?",
            "answer": "50 million",
            "alts": ["1 million", "10", "7000"]
          },
          {
            "question": "In Spacecataz, what do the Mooninites spray on the Plutonians ship?",
            "answer": "We eat out own farts",
            "alts": ["We're gay for each other", "We eat corn the long way", "We touch tips"]
          }
        ]
      },
      {
        "season": 4,
        "quiz": [
          {
            "question": "What does the media leak about Dirtfoot?",
            "answer": "He's totally gay",
            "alts": ["He doesn't exists", "He lives in a well", "Master Shake and him are lovers"]
          },
          {
            "question": "What product appears in the Aqua Teen Hunger Force credits as paid advertising?",
            "answer": "Axe Body Spray",
            "alts": ["Boost Mobile", "Wong Burger", "Dante's Body Repair Shop"]
          },
          {
            "question": "In the deleted scenes episode, what is Meatwads video called?",
            "answer": "Meatwad's Disco Safari Party Explosion",
            "alts": ["Meatwad's Disco Fever Party Time", "Meatwad's Hot Latin Nights Explosion", "Disco Disco Party Disco"]
          },
          {
            "question": "What prize does Carl win from Wong Burger?",
            "answer": "To get his dick ripped off",
            "alts": ["20 cents off his next wasabi fries", "A trip to dick planet", "Rims for 2 Wycked"]
          },
          {
            "question": "When Carl creates his own dog to fend off Handbanana, what is the dog named?",
            "answer": "Spaghetti",
            "alts": ["The Enforcer", "Banana Handler", "Metallica"]
          },
          {
            "question": "What music star does Shake get to appear for Frylock when he is informed he has cancer?",
            "answer": "Andrew W.K.",
            "alts": ["Zakk Wylde", "Spencer Chamberlain", "Hall & Oates"]
          },
          {
            "question": "What grill does Shake purchase which results in the melting of the ice caps?",
            "answer": " The Char-Nobyl 6000",
            "alts": ["The Global Griller", "The Heat Beast 9000", "The Inferno Burn-o"]
          },
          {
            "question": "When the Aqua teens are being visited by Dan from Grim Reaper Gutters they use Carl as a way to divert Dan's attention. What do they use to lure Carl over?",
            "answer": "Tera Patrick",
            "alts": ["Rims for 2 Wycked", "A free car wash", "Shakes lasagne"]
          },
          {
            "question": "When Shake is looking for some cannabis the Mooninites offer him some of their stash, what is it called?",
            "answer": "Moonajuana",
            "alts": ["Lunar Poison", "Moonpoon", "Moon Dust"]
          },
          {
            "question": "Carl is visited by which legendary American football player?",
            "answer": "Bart Oats",
            "alts": ["Joe Montana", "Dan Marino", "Brett Favre"]
          },
          {
            "question": "Who is sent down the tower to stop Frylock from climbing up to the top?",
            "answer": "George Lowe",
            "alts": ["Carl", "Master Shake", "The Mooninites"]
          },
          {
            "question": "What is the name Meatwad gives to the small milkshake that arrives at the Aqua Teens house?",
            "answer": "Jesus Ezekial Jesus",
            "alts": ["Ezekial Christo", "Mini Shake", "Brad"]
          },
          {
            "question": "Meatwad gets a job at a car wash owned by who?",
            "answer": "Carl & Carl Jr",
            "alts": ["Markula", "Donald Sutherland", "The Mooninites"]
          }
        ]
      },
      {
        "season": 5,
        "quiz": [
          {
            "question": "Which Season 5 episode of Aqua Teen Hunger Force was never aired due to the 2007 Mooninite panic",
            "answer": "Boston",
            "alts": ["Sirens", "Bible Fruit", "Gene E"]
          },
          {
            "question": "When the Aqua Teens are abducted and cocooned by military spiders in the Mojave Desert, who tries to sell their house?",
            "answer": "Carl",
            "alts": ["The Mooninites", "The police", "Skooly D"]
          },
          {
            "question": "When a trio of Sirens move into the Aqua Teens house, their names are Chrysanthemum, The BJ Queen and...",
            "answer": "John Kruk",
            "alts": ["Thyme", "Bart Oates", "Saliva"]
          },
          {
            "question": "Who is the landlord of the Aqua Teens house?",
            "answer": "Markula",
            "alts": ["Carl", "Donald Trump", "Dave Mustaine"]
          },
          {
            "question": "What is the name of Meatwads cat that Shake kills by putting it into the Microwave?",
            "answer": "Terrence",
            "alts": ["Mr Sparkles", "Fluffy Bunny", "Big Billy"]
          },
          {
            "question": "What instrument does Carl order for vaginal domination?",
            "answer": "A recorder",
            "alts": ["A guitar", "Bongos", "A harmonica"]
          },
          {
            "question": "When Master Shake steals Frylocks contact lenses, Frylock asks Meatwad to order new ones but instead orders what?",
            "answer": "Ice cream",
            "alts": ["An axe", "A Russian bride", "Jiggle Billy"]
          },
          {
            "question": "What book does Master Shake read Meatwad written by Robb Zhombee?",
            "answer": "Skulldilocks and the Seven Scorpions",
            "alts": ["Dead Riding Dude", "The Three Little Zombies", "Hansel & Deadel"]
          },
          {
            "question": "Where does Frylock escape to get away from enlistment after Meatwad signs him up for the military?",
            "answer": "Canada",
            "alts": ["Afganistan", "Somalia", "Mexico"]
          },
          {
            "question": "When Frylock makes new friends who turn out to be Christian fruit, which fruits are they?",
            "answer": "A banana, tangerine & mango",
            "alts": ["A banana, tangerine & apple", "A papaya, orange & mango", "A banana, watermelon & pear"]
          }
        ]
      }
    ]
  }



  readonly shows = {
    "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fathfwiki%2Fimages%2F4%2F41%2FAthfgroup8mt.png%2Frevision%2Flatest%3Fcb%3D20081223001632&f=1&nofb=1",
    "title": "aqua-teen-hunger-force",
    "info": "Aqua Teen Hunger Force (also known by various alternative titles) is an American adult animated television series created by Dave Willis and Matt Maiellaro for Cartoon Network's late night programming block, Adult Swim. It is about the surreal adventures and antics of three anthropomorphic fast food items: Master Shake, Frylock, and Meatwad, who live together as roommates and frequently interact with their human next-door neighbor, Carl Brutananadilewski.",
    "seasons": 5
  }

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
