import parse from "parse-duration";

const cookiesOptions = {
	maxAge: parse(process.env.NEXT_PUBLIC_COOKIE_EXPIRE) / 1000,
	httpOnly: true,
	sameSite: "lax",
};

export default cookiesOptions;
