import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {PopupService} from "../../shared/services/popup.service";
import {AccordionType} from "../../../types/accordion.type";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private subject: Subject<void>;

  accordionItems = [
    { title: 'Собираете ли вы подарочные боксы?',
      content: 'Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. ' +
        'Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh.',
      active: false,
      arrow: false
    },
    { title: 'Сколько у вас разновидностей чая?',
      content: 'Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. ' +
        'Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh.',
      active: false,
      arrow: false
    },
    { title: 'В какой срок осуществляется доставка?',
      content: 'Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. ' +
        'Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh.',
      active: false,
      arrow: false
    },
    { title: 'У вас обновляется ассортимент?',
      content: 'Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. ' +
        'Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh.',
      active: false,
      arrow: false
    },
    { title: 'Какого объема у вас пачки чая?',
      content: 'Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. ' +
        'Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh.',
      active: false,
      arrow: false
    }
  ];

  constructor(public popupService: PopupService) {

    this.subject = new Subject<void>();
    const interval = setTimeout(() => {
      this.subject.next(this.popupService.openPopup());
    }, 10000);
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 11000);
  }

  ngOnInit() {
  }

  toggleAccordion(item: AccordionType) {
    item.active = !item.active;
    item.arrow = !item.arrow;
  }


  closePopup() {
    this.popupService.closePopup();
  }

  ngOnDestroy() {
    this.subject?.unsubscribe();
    this.popupService.closePopup();
  }
}
