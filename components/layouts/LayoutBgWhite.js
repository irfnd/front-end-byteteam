import Head from "next/head";
import { useRouter } from "next/router";

// Styles + Icons
import { FaAngleLeft } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function LayoutBgWhite(props) {
	const { title, pageTitle, withThreeDot = false, children } = props;
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>

			<main>
				<div className="d-flex justify-content-center min-vh-100">
					<div className="d-flex flex-column position-relative align-items-center mw-mobile">
						<div className="d-flex flex-column p-4 h-100 w-100 bg-white">
							<div className="d-flex align-items-center mt-3 pb-2 mb-4 gap-5">
								<FaAngleLeft className="text-black cursor-pointer" size={30} onClick={() => router.back()} />
								<span className="fs-16 fw-semibold text-black">{pageTitle}</span>
								{withThreeDot && <BsThreeDotsVertical className="ms-auto text-white cursor-pointer" size={30} />}
							</div>
							{children}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}