import React from "react";
import Title from "../title/title";
import styles from "./skills.module.css";
import sectStyle from ".././sect.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { DiJavascript, DiJqueryLogo } from "react-icons/di";
import {
  SiPostcss,
  SiSpring,
  SiMariadb,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbCertificate } from "react-icons/tb";

const Skills = (props) => (
  <div className={`${styles.skills} ${sectStyle.skills}`}>
    <Title
      txtTitle="i can do these"
      txtSub="각 아이콘 위에 마우스를 올려주세요!"
      txtColor="skills"
    />
    <div className={styles.cont}>
      <div className={`${styles.block} ${styles.front}`}>
        <div className={styles.block_title}>front end</div>
        <div className={styles.icon_wrap}>
          <div className={styles.icon_item}>
            <AiFillHtml5 className={`${styles.icon} ${styles.html}`} />
            <div className={styles.icon_info}>
              <span className={styles.info_title}>html</span>
            </div>
          </div>
          <div className={styles.icon_item}>
            <FaCss3Alt className={`${styles.icon} ${styles.css}`} />
            <div className={styles.icon_info}>
              <span className={styles.info_title}>css</span>
            </div>
          </div>
          <div className={styles.icon_item}>
            <DiJavascript className={`${styles.icon} ${styles.js}`} />
            <div className={styles.icon_info}>
              <span className={styles.info_title}>javascript</span>
            </div>
          </div>
          <div className={styles.icon_item}>
            <FaReact className={`${styles.icon} ${styles.react}`} />
            <div className={styles.icon_info}>
              <span className={styles.info_title}>react</span>
            </div>
          </div>
          <div className={styles.icon_item}>
            <div className={`${styles.icon} ${styles.scss}`}>
              <b>SCSS</b>
            </div>
            <div className={styles.icon_info}>
              <span className={styles.info_title}>scss</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.block} ${styles.back}`}>
        <div className={styles.block_title}>back end</div>
        <div className={styles.icon_wrap}>
          <div className={styles.icon_item}>
            <SiSpring className={`${styles.icon} ${styles.spring}`} />
            <div className={styles.icon_info}>
              <span className={styles.info_title}>spring</span>
              <p className={styles.info_cont}>
                대학교 4학년 동안 주로 spring 프로젝트를 다루었고 Eclipse 툴을
                사용하여 ERP 시스템인 SES 프로젝트 Front Office와 Back Office를
                제작한 경험이 있습니다.
              </p>
            </div>
          </div>
          <div className={styles.icon_item}>
            <SiMariadb className={`${styles.icon} ${styles.mariadb}`} />
            <div className={styles.icon_info}>
              <span className={styles.info_title}>mariadb</span>
              <p className={styles.info_cont}>
                프로젝트 DB를 주로 MariaDB로 제작했습니다. SQL은 테이블을 만들고
                데이터를 입력, 수정, 삭제할 정도로 사용 해봤고 DAO, DTO에 대해
                이해하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.block} ${styles.etc}`}>
        <div className={styles.block_title}>etc...</div>
        <div className={styles.icon_wrap}>
          <div className={styles.icon_item}>
            <SiVisualstudiocode className={`${styles.icon} ${styles.vscode}`} />
            <div className={styles.icon_info}>
              <span className={styles.info_title}>vscode</span>
              <p className={styles.info_cont}>
                현재 주로 사용하는 툴은 Visual Studio Code입니다.
              </p>
            </div>
          </div>
          <div className={styles.icon_item}>
            <TbCertificate className={`${styles.icon} ${styles.cert}`} />
            <div className={styles.icon_info}>
              <span className={styles.info_title}>정보처리기사</span>
              <p className={styles.info_cont}>
                - 필기
                <br />
                합격 날짜: 2020.06.26
                <br />
                - 실기
                <br />
                합격 날짜: 2021.06.02
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
