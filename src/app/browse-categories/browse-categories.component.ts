import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-browse-categories',
	templateUrl: './browse-categories.component.html',
	styleUrls: ['./browse-categories.component.scss']
})
export class BrowseCategoriesComponent implements OnInit {

	menulist = [
		{
			title: 'Computers and Accessories',
			imageUrl: 'assets/images/Computers_Accessories_2.jpg',
			subMenus: [
				{
					title: 'Laptops',
					subTitle: [
						'Mini Laptops and Netbooks',
						'Notebooks',
						'Ultrabooks',
						'Hybrid PCs',
						'Macbooks'
					]
				},
				{
					title: 'Desktop and Monitors',
					subTitle: [
						'CPUs',
						'All in Ones',
						'Monitors',
						'UPS',
						'Servers',
						'Desktop Bundle'
					]
				},
				{
					title: 'Computing Accessories',
					subTitle: [
						'Computer Peripherals',
						'Bags, Cases, Covers and Sleeves',
						'Laptop and Desktop Accessories',
						'Storage Devices'
					]
				},
				{
					title: 'Printers, Scanners & Accesories',
					subTitle: [
						'Printers',
						'Scanners',
						'Inks, Toners & Catridges'
					]
				},
				{
					title: 'Wifi & Networking',
					subTitle: [
						'Switches',
						'Routers',
						'Modems',
						'Networking Peripherals'
					]
				},
				{
					title: 'PC Gaming',
					subTitle: [
						'PC Games',
						'PC Gaming Accessories'
					]
				},
				{
					title: 'Softwares',
					subTitle: [
						'Office & Busienss',
						'Operating Systems',
						'Security & Utilities'
					]
				},
				{
					title: 'Projectors',
					subTitle: []
				}
			]
		},
		{
			title: 'Phones and Tablets',
			imageUrl: 'assets/images/Phones.jpg',
			subMenus: [
				{
					title: 'Laptops',
					subTitle: [
						'Mini Laptops and Netbooks',
						'Notebooks',
						'Ultrabooks',
						'Hybrid PCs',
						'Macbooks'
					]
				},
				{
					title: 'Desktop and Monitors',
					subTitle: [
						'CPUs',
						'All in Ones',
						'Monitors',
						'UPS',
						'Servers',
						'Desktop Bundle'
					]
				},
				{
					title: 'Computing Accessories',
					subTitle: [
						'Computer Peripherals',
						'Bags, Cases, Covers and Sleeves',
						'Laptop and Desktop Accessories',
						'Storage Devices'
					]
				},
				{
					title: 'Printers, Scanners & Accesories',
					subTitle: [
						'Printers',
						'Scanners',
						'Inks, Toners & Catridges'
					]
				},
				{
					title: 'Wifi & Networking',
					subTitle: [
						'Switches',
						'Routers',
						'Modems',
						'Networking Peripherals'
					]
				},
				{
					title: 'PC Gaming',
					subTitle: [
						'PC Games',
						'PC Gaming Accessories'
					]
				},
				{
					title: 'Softwares',
					subTitle: [
						'Office & Busienss',
						'Operating Systems',
						'Security & Utilities'
					]
				},
				{
					title: 'Projectors',
					subTitle: []
				}
			]
		},
		{
			title: 'Electronics',
			imageUrl: 'assets/images/HomeEnt.jpg',
			subMenus: [
				{
					title: 'Laptops',
					subTitle: [
						'Mini Laptops and Netbooks',
						'Notebooks',
						'Ultrabooks',
						'Hybrid PCs',
						'Macbooks'
					]
				},
				{
					title: 'Desktop and Monitors',
					subTitle: [
						'CPUs',
						'All in Ones',
						'Monitors',
						'UPS',
						'Servers',
						'Desktop Bundle'
					]
				},
				{
					title: 'Computing Accessories',
					subTitle: [
						'Computer Peripherals',
						'Bags, Cases, Covers and Sleeves',
						'Laptop and Desktop Accessories',
						'Storage Devices'
					]
				},
				{
					title: 'Printers, Scanners & Accesories',
					subTitle: [
						'Printers',
						'Scanners',
						'Inks, Toners & Catridges'
					]
				},
				{
					title: 'Wifi & Networking',
					subTitle: [
						'Switches',
						'Routers',
						'Modems',
						'Networking Peripherals'
					]
				},
				{
					title: 'PC Gaming',
					subTitle: [
						'PC Games',
						'PC Gaming Accessories'
					]
				},
				{
					title: 'Softwares',
					subTitle: [
						'Office & Busienss',
						'Operating Systems',
						'Security & Utilities'
					]
				},
				{
					title: 'Projectors',
					subTitle: []
				}
			]
		},
		{
			title: 'Konga Fashion',
			imageUrl: 'assets/images/Fashion1.jpg',
			subMenus: [
				{
					title: 'Laptops',
					subTitle: [
						'Mini Laptops and Netbooks',
						'Notebooks',
						'Ultrabooks',
						'Hybrid PCs',
						'Macbooks'
					]
				},
				{
					title: 'Desktop and Monitors',
					subTitle: [
						'CPUs',
						'All in Ones',
						'Monitors',
						'UPS',
						'Servers',
						'Desktop Bundle'
					]
				},
				{
					title: 'Computing Accessories',
					subTitle: [
						'Computer Peripherals',
						'Bags, Cases, Covers and Sleeves',
						'Laptop and Desktop Accessories',
						'Storage Devices'
					]
				},
				{
					title: 'Printers, Scanners & Accesories',
					subTitle: [
						'Printers',
						'Scanners',
						'Inks, Toners & Catridges'
					]
				},
				{
					title: 'Wifi & Networking',
					subTitle: [
						'Switches',
						'Routers',
						'Modems',
						'Networking Peripherals'
					]
				},
				{
					title: 'PC Gaming',
					subTitle: [
						'PC Games',
						'PC Gaming Accessories'
					]
				},
				{
					title: 'Softwares',
					subTitle: [
						'Office & Busienss',
						'Operating Systems',
						'Security & Utilities'
					]
				},
				{
					title: 'Projectors',
					subTitle: []
				}
			]
		},
		{
			title: 'Home and Kitchen',
			imageUrl: 'assets/images/HK.jpg',
			subMenus: [
				{
					title: 'Laptops',
					subTitle: [
						'Mini Laptops and Netbooks',
						'Notebooks',
						'Ultrabooks',
						'Hybrid PCs',
						'Macbooks'
					]
				},
				{
					title: 'Desktop and Monitors',
					subTitle: [
						'CPUs',
						'All in Ones',
						'Monitors',
						'UPS',
						'Servers',
						'Desktop Bundle'
					]
				},
				{
					title: 'Computing Accessories',
					subTitle: [
						'Computer Peripherals',
						'Bags, Cases, Covers and Sleeves',
						'Laptop and Desktop Accessories',
						'Storage Devices'
					]
				},
				{
					title: 'Printers, Scanners & Accesories',
					subTitle: [
						'Printers',
						'Scanners',
						'Inks, Toners & Catridges'
					]
				},
				{
					title: 'Wifi & Networking',
					subTitle: [
						'Switches',
						'Routers',
						'Modems',
						'Networking Peripherals'
					]
				},
				{
					title: 'PC Gaming',
					subTitle: [
						'PC Games',
						'PC Gaming Accessories'
					]
				},
				{
					title: 'Softwares',
					subTitle: [
						'Office & Busienss',
						'Operating Systems',
						'Security & Utilities'
					]
				},
				{
					title: 'Projectors',
					subTitle: []
				}
			]
		},
		{
			title: 'Baby, Kids and Toys',
			imageUrl: 'assets/images/Babies_Kids_Toys.jpg',
			subMenus: [
				{
					title: 'Laptops',
					subTitle: [
						'Mini Laptops and Netbooks',
						'Notebooks',
						'Ultrabooks',
						'Hybrid PCs',
						'Macbooks'
					]
				},
				{
					title: 'Desktop and Monitors',
					subTitle: [
						'CPUs',
						'All in Ones',
						'Monitors',
						'UPS',
						'Servers',
						'Desktop Bundle'
					]
				},
				{
					title: 'Computing Accessories',
					subTitle: [
						'Computer Peripherals',
						'Bags, Cases, Covers and Sleeves',
						'Laptop and Desktop Accessories',
						'Storage Devices'
					]
				},
				{
					title: 'Printers, Scanners & Accesories',
					subTitle: [
						'Printers',
						'Scanners',
						'Inks, Toners & Catridges'
					]
				},
				{
					title: 'Wifi & Networking',
					subTitle: [
						'Switches',
						'Routers',
						'Modems',
						'Networking Peripherals'
					]
				},
				{
					title: 'PC Gaming',
					subTitle: [
						'PC Games',
						'PC Gaming Accessories'
					]
				},
				{
					title: 'Softwares',
					subTitle: [
						'Office & Busienss',
						'Operating Systems',
						'Security & Utilities'
					]
				},
				{
					title: 'Projectors',
					subTitle: []
				}
			]
		},
		{
			title: 'Wines & Other Categories',
			imageUrl: 'assets/images/Other_Categories1.jpg',
			subMenus: [
				{
					title: 'Laptops',
					subTitle: [
						'Mini Laptops and Netbooks',
						'Notebooks',
						'Ultrabooks',
						'Hybrid PCs',
						'Macbooks'
					]
				},
				{
					title: 'Desktop and Monitors',
					subTitle: [
						'CPUs',
						'All in Ones',
						'Monitors',
						'UPS',
						'Servers',
						'Desktop Bundle'
					]
				},
				{
					title: 'Computing Accessories',
					subTitle: [
						'Computer Peripherals',
						'Bags, Cases, Covers and Sleeves',
						'Laptop and Desktop Accessories',
						'Storage Devices'
					]
				},
				{
					title: 'Printers, Scanners & Accesories',
					subTitle: [
						'Printers',
						'Scanners',
						'Inks, Toners & Catridges'
					]
				},
				{
					title: 'Wifi & Networking',
					subTitle: [
						'Switches',
						'Routers',
						'Modems',
						'Networking Peripherals'
					]
				},
				{
					title: 'PC Gaming',
					subTitle: [
						'PC Games',
						'PC Gaming Accessories'
					]
				},
				{
					title: 'Softwares',
					subTitle: [
						'Office & Busienss',
						'Operating Systems',
						'Security & Utilities'
					]
				},
				{
					title: 'Projectors',
					subTitle: []
				}
			]
		},
	];

	browseContH;

	opened = true;

	constructor() { }

	ngOnInit(): void {
		this.initiateAccordion();
	}

	initiateAccordion(): void {
		let browseCont = document.querySelector('#browseCatCont');
		let variationItems = browseCont.querySelectorAll('.catItem');
		let me = this;
		if (variationItems.length == 0) {
			setTimeout(() => {
				me.initiateAccordion();
			}, 1000);
			return;
		}

		let totalH = 0;
		for (let i = 0; i < variationItems.length; i++) {
			let itemH = +getComputedStyle(variationItems[i.toString()]).height.replace('px', '');
			totalH += itemH;
		}

		this.browseContH = totalH;
	}
}
