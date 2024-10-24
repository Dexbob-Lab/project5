import { create } from 'zustand';

const useGlobalData = create(set => ({
	CurrObject: undefined,
	SideMenuFlg: false,
	setCurrObject: obj => set({ CurrObject: obj }),
	closeSideMenu: () => set({ SideMenuFlg: false }),
	toggleSideMenu: () => set(state => ({ SideMenuFlg: !state.SideMenuFlg }))
}));

export default useGlobalData;
