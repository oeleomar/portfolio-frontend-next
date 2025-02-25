import * as Styled from "./styles";
import { GithubOutline } from "@styled-icons/evaicons-outline";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { LinkedinOutline } from "@styled-icons/evaicons-outline";
import { TwitterOutline } from "@styled-icons/evaicons-outline";
import { Star } from "@styled-icons/bootstrap/Star";
import { GitBranch } from "@styled-icons/boxicons-regular/GitBranch";
import { useInView } from "react-intersection-observer";
import { FooterProps } from "../../../types/portfolio";
import Link from "next/link";

export type FooterTemplateProps = {
	footer: FooterProps;
};

export const Footer = ({ footer }: FooterTemplateProps) => {
	return (
		<Styled.Wrapper>
			<Styled.FooterIcons>
				<div className="animation-fade"></div>
				<ul>
					{footer.github && (
						<li className="animation-top delay3">
							<Link
								target="_blank"
								href={footer.linkGithub}
								aria-label="Link para o github de Eleomar"
							>
								<GithubOutline size={22} />
							</Link>
						</li>
					)}
					{footer.linkedin && (
						<li className="animation-top delay2">
							<Link
								target="_blank"
								href={footer.linkLinkedin}
								aria-label="Link para o LinkedIn de Eleomar"
							>
								<LinkedinOutline size={22} />
							</Link>
						</li>
					)}
					{footer.instagram && (
						<li className="animation-top delay1">
							<Link
								target="_blank"
								href={footer.linkInstagram}
								aria-label="Link para o Instagram de Eleomar"
							>
								<Instagram size={22} />
							</Link>
						</li>
					)}
				</ul>
			</Styled.FooterIcons>
			<Styled.FooterText className="animation-fade">
				<Link href={footer.linkDesign} target="_blank">
					Designed By Brittany Chiang
				</Link>
				<span> & </span>
				<Link href={footer.linkEleomar} target="_blank">
					Created in Next.js by Eleomar Dorneles
				</Link>
				<div>
					<Star size={12} />
					<span>5.931</span>
					<GitBranch size={12} />
					<span>5.931</span>
				</div>
			</Styled.FooterText>
		</Styled.Wrapper>
	);
};
