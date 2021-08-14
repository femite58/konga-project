import { Component, OnInit, AfterViewInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
	selector: 'app-menu-bar',
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit, AfterViewInit {
	active = -1;
	auth = true;
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

	catList = [];

	selectedCat = "";
	currCat = 0;
	@ViewChild('desktop') desktop:ElementRef;

	openSideDrawer = false;

	constructor(@Inject(WINDOW) private window: Window, ) { }

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		let megaMenuLinks = this.desktop.nativeElement.querySelectorAll('.megaMenuLink');
		let allcatLink = this.desktop.nativeElement.querySelector('.allCat');
		let winWidth = this.window.innerWidth;

		let me = this;
		if (megaMenuLinks.length == 0) {
			setTimeout(() => {
				me.ngAfterViewInit();
			}, 1000);
			return;
		}

		this.responsive(winWidth, megaMenuLinks, allcatLink);

		this.desktop.nativeElement.ownerDocument.defaultView.addEventListener('resize', () => {
			let winwidth = this.window.innerWidth;
			me.responsive(winwidth, megaMenuLinks, allcatLink);
		});

		if (this.menulist.length != 0 && this.menulist != undefined) {
			for (let i = 0; i < this.menulist.length; i++) {
				this.catList.push(this.menulist[i].title);
			}
		}
	}

	responsive(winwidth, megalinks, allcatLink): void {
		let padx = (winwidth * 29) / 1366;
		for (let i = 0; i < megalinks.length; i++) {
			megalinks[i.toString()].style.cssText = `padding: 0px ${padx}px;`;
		}
		allcatLink.style.cssText = `padding: 0px ${padx}px;`;
	}

	savedIndex = -1;

	selectCat(i, dir): void {
		dir == 1 ? this.currCat++ : this.currCat--;
		if (this.currCat > 2) {
			this.currCat = 2;
			return;
		}
		this.catList = [];
		if (this.currCat == 1) {
			this.savedIndex = i;
			for (let j = 0; j < this.menulist[i].subMenus.length; j++) {
				this.catList.push(this.menulist[i].subMenus[j].title);
			}
			this.selectedCat = this.menulist[i].title;
		} else if (this.currCat == 2) {
			for (let j = 0; j < this.menulist[this.savedIndex].subMenus[i].subTitle.length; j++) {
				this.catList.push(this.menulist[this.savedIndex].subMenus[i].subTitle[j]);
			}
			this.selectedCat = this.menulist[this.savedIndex].subMenus[i].title;
		} else {
			for (let j = 0; j < this.menulist.length; j++) {
				this.catList.push(this.menulist[j].title);
			}
			this.selectedCat = "";
		}
	}

	toggleSideDrawer(): void {
		this.openSideDrawer = !this.openSideDrawer;
		let body = this.window.document.body;
		if (!this.openSideDrawer) {
			body.style.overflowY = "auto";
		} else {
			body.style.overflowY = "hidden";
		}
	}
}
