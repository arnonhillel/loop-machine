import { Component, OnInit } from '@angular/core';
import { AudioSrcModel } from './models/audio.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'loop-machine';
  public loopFiles: AudioSrcModel[] = [
    {
      id: '1',
      name: "funk beats",
      path: "assets/120_future_funk_beats_25.mp3",
      selected: false
    },
    {
      id: '2',
      name: "breakbeats",
      path: "assets/120_stutter_breakbeats_16.mp3",
      selected: false
    },
    {
      id: '3',
      name: "heavy funk",
      path: "assets/Bass Warwick heavy funk groove on E 120 BPM.mp3",
      selected: false
    },
    {
      id: '4',
      name: "guitar coutry",
      path: "assets/electric guitar coutry slide 120bpm - B.mp3",
      selected: false
    },
    {
      id: '5',
      name: "Stompy Slosh",
      path: "assets/FUD_120_StompySlosh.mp3",
      selected: false
    },
    {
      id: '6',
      name: "Tanggu",
      path: "assets/GrooveB_120bpm_Tanggu.mp3",
      selected: false
    },
    {
      id: '7',
      name: "Perc",
      path: "assets/MazePolitics_120_Perc.mp3",
      selected: false
    },
    {
      id: '8',
      name: "Groove",
      path: "assets/PAS3GROOVE1.03B.mp3",
      selected: false
    },
    {
      id: '9',
      name: "Organ Synth",
      path: "assets/SilentStar_120_Em_OrganSynth.mp3",
      selected: false
    }
  ]

  ngOnInit(): void {
    this.loopFiles.forEach(element => {
      element.audio = new Audio(element.path)
    });
  }

  selectItem(id) {
    this.loopFiles.forEach(element => {
      if (element.id === id) {
        element.selected = !element.selected
        if (!element.selected) {
          element.audio.pause()
        }
      }
    });
  }

  playSelected() {
    this.loopFiles.forEach(element => {
      if (element.selected) {
        element.audio.play()
      }
    });
  }

}
