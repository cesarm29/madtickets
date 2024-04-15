import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "../header/header.component";
import { FilterComponent } from "../filter/filter.component";
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { FooterComponent } from "../footer/footer.component";
import { InformationComponent } from "../information/information.component";
import { CardComponent } from "../card/card.component";
import { OfferComponent } from "../offer/offer.component";
import { ImageComponent } from "../image/image.component";
import { CardDescriptionComponent } from "../card-description/card-description.component";
import { ModalComponent } from "../modal/modal.component";
//model product
import { Product } from '../model/product';
// get data from service
import { DataService } from '../services/data.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NavbarComponent, HeaderComponent, FilterComponent, NewsletterComponent, FooterComponent, InformationComponent, CardComponent, OfferComponent, ImageComponent, CommonModule, CardDescriptionComponent, ModalComponent]
})
export class HomeComponent {

    dataFilter!: Product[];
    dataTwo!: Product[];
    dataThree!: Product[];
    dataFour!: Product[];
    dataSix!: Product[];

    constructor(private dataService: DataService) {

        dataService.fetchDataTwo().subscribe(res => {
            this.dataTwo = res;
        });

        dataService.fetchDataThree().subscribe(res => {
            this.dataThree = res;
        });

        dataService.fetchDataFour().subscribe(res => {
            this.dataFour = res;
        });

        dataService.fetchDataSix().subscribe(res => {
            this.dataSix = res;
        });
    }

    searchItems(newItem: string) {
        this.dataService.fetchDataFilter(newItem).subscribe(res => {
            this.dataFilter = res;
        });
    }
}
