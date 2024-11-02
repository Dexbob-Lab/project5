import { create } from 'zustand';

const useGlobalData = create(set => ({
	Lang: 'kr', // 'kr', 'en'
	CurrObject: undefined,
	SideMenuFlg: false,
	YoutubeFlg: false,
	FlickrFlg: false,
	BoardFlg: false,
	BoardLockFlg: false,
	SetLang: lang => set({ Lang: lang }),
	setCurrObject: obj => set({ CurrObject: obj }),
	closeSideMenu: () => set({ SideMenuFlg: false }),
	toggleSideMenu: () => set(state => ({ SideMenuFlg: !state.SideMenuFlg })),
	toggleYoutubeModal: () => set(state => ({ YoutubeFlg: !state.YoutubeFlg })),
	toggleFlickrModal: () => set(state => ({ FlickrFlg: !state.FlickrFlg })),
	toggleBoardModal: () => set(state => ({ BoardFlg: !state.BoardFlg })),
	toggleBoardLockModal: () => set(state => ({ BoardLockFlg: !state.BoardLockFlg }))
}));

export default useGlobalData;
