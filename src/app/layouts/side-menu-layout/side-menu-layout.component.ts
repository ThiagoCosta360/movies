import { Component, Input } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-side-menu-layout',
	templateUrl: './side-menu-layout.component.html',
	styleUrls: ['./side-menu-layout.component.scss']
})
export class SideMenuLayoutComponent {
	@Input() menu!: NbMenuItem[]
	private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1)

	public isMenuOpen = true
	public sidebarTag = 'menu-sidebar'

	constructor(
		public readonly sidebarService: NbSidebarService,
		public readonly menuService: NbMenuService,
		public readonly breakpointService: NbMediaBreakpointsService,
	) {
		const { sm } = this.breakpointService.getBreakpointsMap();
		this.menuService.onItemSelect()
			.pipe(takeUntil(this.destroyed$))
			.subscribe(
				() => {
					if (document.documentElement.clientWidth < sm) {
						this.sidebarService.compact(this.sidebarTag);
					}
				},
			);
	}

	public toggleSidebar(): void {
		this.isMenuOpen = !this.isMenuOpen;
		if (this.isMenuOpen) {
			this.sidebarService.expand(this.sidebarTag);
		} else {
			this.sidebarService.compact(this.sidebarTag);
		}
	}

	public toggleMenu(): void {
		// this.sidebarService.toggle();
	}

	ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}
}
