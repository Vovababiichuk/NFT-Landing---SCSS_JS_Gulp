import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import {
	Navigation,
	EffectFade,
	Pagination,
	Thumbs,
	Controller,
	FreeMode,
	Scrollbar,
	A11y,
	Mousewheel
} from 'swiper';
import AOS from 'aos';

flsFunctions.isWebp();

const swiper = new Swiper('.auctions-slider', {
	loop: true,
	navigation: {
		nextEl: '.swiper-btn-next1',
		prevEl: '.swiper-btn-prev1',
	},
	modules: [Navigation],
	autoHeight: true,
	speed: 500,
	slidesPerView: 2.8,
});