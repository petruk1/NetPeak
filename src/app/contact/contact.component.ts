import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  countries;
  selectedCountry = null;
  contactData = {
    name: '',
    email: '',
    message: '',
    country: 'Country',
    city: 'City'
  };

  constructor(private dataService: DataService) {
  }

  submit() {
    this.contactData.city = this.contactData.city === 'City' ? '' : this.contactData.city;
    this.contactData.country = this.contactData.country === 'Country' ? '' : this.contactData.country;
  }

  selectedCountryChanged(name) {
    this.selectedCountry = this.countries.filter(c => c.name === name)[0];
    this.contactData.country = name;
    this.contactData.city = this.selectedCountry.cities[0];
  }

  selectedCityChanged(name) {
    this.contactData.city = name;
  }

  ngOnInit() {
    this.countries = this.dataService.getCountries();
  }

}
