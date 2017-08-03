import { Component, OnInit } from '@angular/core';
import { YogiBotService } from '../../services/yogi-bot.service';
import { SayingService } from '../../services/saying.service';
import { Saying } from '../../models/saying';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: []
})
export class ContentComponent implements OnInit {

  saying: Saying;

  constructor(private botService: YogiBotService, private sayingService: SayingService) {
    this.saying = sayingService.currentSaying;
  }

  ngOnInit() {
  }

}
