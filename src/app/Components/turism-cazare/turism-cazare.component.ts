import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turism-cazare',
  templateUrl: './turism-cazare.component.html',
  styleUrls: ['./turism-cazare.component.scss']
})
export class TurismCazareComponent implements OnInit {

  linkHan = "https://www.booking.com/hotel/ro/casa-vanatorului-comuna-pestisani.ro.html?aid=304142;label=gen173nr-1FCAMowAFCCXBlc3Rpc2FuaUggWARowAGIAQGYASC4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AurCrI4GwAIB0gIkZWY4NTFjZTgtZTBlMS00ODhiLTgwNjEtMmQ5NWRiYjMxYTk32AIF4AIB;sid=0b0fa2b531b84774c89abd138acb0c13;atlas_src=sr_iw_btn;dest_id=-1166429;dest_type=city;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&";

  linkAna = "https://www.booking.com/hotel/ro/vila-ana-pestisani.ro.html?aid=304142;label=gen173nr-1FCAMowAFCCXBlc3Rpc2FuaUggWARowAGIAQGYASC4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AurCrI4GwAIB0gIkZWY4NTFjZTgtZTBlMS00ODhiLTgwNjEtMmQ5NWRiYjMxYTk32AIF4AIB;sid=4121c0c07d16aa85c414a3dda80a6b5f;dest_id=-1166429;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1642261135;srpvid=2bbf6e079ca60042;type=total;ucfs=1&#hotelTmpl"

  home = true;
  han = false;
  ana = false;

  scroll(el: HTMLElement) {

    el.scrollIntoView({behavior: 'smooth', block: "start"});
}

  showHan() {
    this.home = false;
    this.han = true;
    this.ana = false;
  }

  showAna() {
    this.home = false;
    this.han = false;
    this.ana = true;
  }

  hideAll() {
    this.home = true;
    this.han = false;
    this.ana = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
