import {Injectable} from '@angular/core';

const COUNTRIES = [
  {name: 'USA', cities: ['New York', 'LA', 'Atlanta']},
  {name: 'Ukraine', cities: ['Kiev', 'Lviv', 'Odessa']},
  {name: 'Spain', cities: ['Madrid', 'Toledo', 'Barcelona']}
]

const MOCK_TABS_DATA = [{
  icon: '../../assets/images/Highlight-Reload-Icon.png',
  title: {
    highlighted: 'Sync',
    another: ' across all devices'
  },
  description: `This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red
      Queen. To her surprise, she lost sight of her in a moment.`,
  image: '../../assets/images/how_super_brands_are_using_tech_banner-600x600.jpg'
}, {
  icon: '../../assets/images/Highlight-Inbox-Icon.png',
  title: {
    highlighted: 'All emails',
    another: ' in one place'
  },
  description: `This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red
        Queen. To her surprise, she lost sight of her in a moment`,
  image: '../../assets/images/Smiling-homeowners-600x600.jpg'
}, {
  icon: '../../assets/images/Highlight-Reload-Icon.png',
  title: {
    highlighted: 'Track',
    another: ' your time'
  },
  description: `This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red
        Queen. To her surprise, she lost sight of her in a moment.`,
  image: '../../assets/images/david_rouls-600x600.jpg'
}];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  getCountries(): any[] {
    return COUNTRIES;
  }

  getMockTabsData(): any[] {
    return MOCK_TABS_DATA;
  }
}
