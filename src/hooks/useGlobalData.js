import { create } from 'zustand';

export const useGlobalData = create(set => ({
	SideMenuFlg: false,
	closeSideMenu: () => set({ SideMenuFlg: false }),
	toggleSideMenu: () => set(state => ({ SideMenuFlg: !state.SideMenuFlg }))
}));
