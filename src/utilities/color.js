import Color from 'color';

export const clamp = (min, max) => number =>
	Math.min(Math.max(min, number), max);

export const adjustChannel = factor => channel =>
	clamp(0, 255)(channel * factor);

export const generateSecondary = primaryColor => {
	const primary = new Color(primaryColor);

	const adjust = adjustChannel(primary.isDark() ? -1.1 : 1.7);

	const { r, g, b } = primary.object();

	return new Color({
		r: adjust(r),
		g: adjust(g),
		b: adjust(b)
	}).hex();
};
