import { create } from 'zustand';

const useGlobalData = create(set => ({
	Lang: 'kr', // 'kr', 'en'
	CurrObject: undefined,
	SideMenuFlg: false,
	YoutubeFlg: false,
	SetLang: lang => set({ Lang: lang }),
	setCurrObject: obj => set({ CurrObject: obj }),
	closeSideMenu: () => set({ SideMenuFlg: false }),
	toggleSideMenu: () => set(state => ({ SideMenuFlg: !state.SideMenuFlg })),
	toggleYoutubeModal: () => set(state => ({ YoutubeFlg: !state.YoutubeFlg }))
}));

export default useGlobalData;
