import { Link } from "react-router-dom";
import { Button, Space } from "antd";

import classes from "./IntoPg1.module.css";

import { useTranslation } from "react-i18next";

const IntroPg1 = () => {
  const { t } = useTranslation();

  return (
    <div
      className={classes["main"]}
      //     style={{
      //     backgroundImage: `url("https://www.eb-clinet.org/fileadmin/_processed_/f/b/csm_Diagnostic_Tool_Birmingham_e69956bcba.jpg")`,
      //     backgroundPosition: 'center',
      //     backgroundSize: 'cover',
      //     backgroundRepeat: 'no-repeat',
      // }}
    >
      <div className={classes["welcometxt"]}>
        {t('EpidermolysisBullosaClinicalDiagnosticMatrix')}
      </div>
      <div className={classes["butterfly"]}>
        <img
          src={`${process.env.PUBLIC_URL}/New_Pictures/thebutterfly.jpg`}
          alt="butterflypic"
        />
      </div>
      <Space direction="vertical">
        <Button type="link" large>
          <Link to="/form">
            <div style={{ fontSize: "21px" }}>
             {t("ClickThisToFillTheClinicalFeatures")}
            </div>
          </Link>
        </Button>
        <Button type="link" large>
          <Link to="/genomics">
            <div style={{ fontSize: "21px" }}>
              {t("ClickThisToFillTheFilteredGenomicsData")}
            </div>
          </Link>
        </Button>
      </Space>
      <div style={{ marginTop: "10%" }}>
       {t('Forfurtherdetails')}
        <Button type="link" large>
        <a target="_blank" rel="noreferrer" href="https://doi.org/10.1111/bjd.15221">{t('ReadHere')}</a>
        </Button>
          
      </div>
    </div>
  );
};

export default IntroPg1;
