import frcTeesImg from "../assets/FRCTees.svg";
import geneHaasImg from "../assets/GeneHaasFoundation.webp";
import honeywellImg from "../assets/Honeywell.svg";
import keystoneImg from "../assets/Keystone.png";
import pineLakeVistasImg from "../assets/PineLakeVistas.png";
import yassImg from "../assets/YASS.png";

export const sponsors = [
	{ name: "Gene Haas Foundation", url: "https://www.genehaasfoundation.org", logo: geneHaasImg },
	{ name: "Honeywell", url: "https://www.honeywell.com", logo: honeywellImg },
	{ name: "Pine Lake Vistas", url: "https://pinelakevistas.com", logo: pineLakeVistasImg, filterClass: "dark:invert" },
	{ name: "Yet Another Software Suite", url: "https://yetanothersoftwaresuite.com", logo: yassImg },
	{ name: "FRC Tees", url: "https://frctees.com", logo: frcTeesImg, filterClass: "dark:invert" },
	{ name: "Keystone School", url: "https://www.keystoneschool.org", logo: keystoneImg, filterClass: "invert dark:invert-0" },
];
