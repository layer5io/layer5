import React from "react";
import GSOC2023 from "../../collections/programs/gsoc-2023/index.mdx";
import GSOC2022 from "../../collections/programs/gsoc-2022/index.mdx";
import GSOC2021 from "../../collections/programs/gsoc-2021/index.mdx";
import GSOC2020 from "../../collections/programs/gsoc-2020/index.mdx";
import GSOC2019 from "../../collections/programs/gsoc-2019/index.mdx";
import HACK2022 from "../../collections/programs/hacktoberfest-2022/index.mdx";
import HACK2021 from "../../collections/programs/hacktoberfest-2021/index.mdx";
import HACK2020 from "../../collections/programs/hacktoberfest-2020/index.mdx";
import LFX2023 from "../../collections/programs/lfx-2023/lfx-2023.mdx";
import LFX2022 from "../../collections/programs/lfx-2022/lfx-2022.mdx";
import LFX2021 from "../../collections/programs/lfx-2021/lfx-2021.mdx";

const SelectedProgram = ({ selected }) => {

  switch (selected){
    case "Google Summer of Code 2023":
      return <GSOC2023 />;
    case "Google Summer of Code 2022":
      return <GSOC2022 />;
    case "Google Summer of Code 2021":
      return <GSOC2021 />;
    case "Google Summer of Code 2020":
      return <GSOC2020 />;
    case "Google Summer of Code 2019":
      return <GSOC2019 />;
    case "Hacktoberfest 2022":
      return <HACK2022 />;
    case "Hacktoberfest 2021":
      return <HACK2021 />;
    case "Hacktoberfest 2020":
      return <HACK2020 />;
    case "Linux Foundation 2023":
      return <LFX2023 />;
    case "Linux Foundation 2022":
      return <LFX2022 />;
    case "Linux Foundation 2021":
      return <LFX2021 />;
    default:
      return <GSOC2023 />;
  }

};

export default SelectedProgram;