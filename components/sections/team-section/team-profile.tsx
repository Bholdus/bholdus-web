import Image from "../../common/image";

import { getSocials } from "../../../utils/api";

const TeamProfile = ({ data, index }) => {
  const socials = getSocials(data);

  return (
    <div
      key={index}
      className="team-member"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay={200}
      data-aos-offset="0"
    >
      <div className="team-member__avatar">
        <Image img={data.avatar} />
      </div>
      <div className="team-member__content">
        <div className="team-member__name">{data.name}</div>
        <div className="team-member__post">{data.title}</div>
        <div className="team-member__text">{data.bio}</div>
        <ul className="team-member__social">
          {socials.map(({ type, url }, index: number) => {
            if (url)
              return (
                <li key={index}>
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <Image
                      img={{
                        url: `/images/${type}.svg`,
                        alternativeText: type,
                      }}
                    />
                  </a>
                </li>
              );
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TeamProfile;
