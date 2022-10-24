import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeadersService } from '../services/leaders.service';
import { PROMOTIONS } from '../shared/promotions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish | undefined;
  promotion: Promotion | undefined;
  leader: Leader | undefined;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeadersService) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
    .subscribe(dish => this.dish = dish);
    this.promotionservice.getFeaturedPromotions()
    .subscribe(promotion => this.promotion = promotion)
    this.leaderservice.getFeaturedLeader()
    .subscribe(leader => this.leader = leader)
  }
}


