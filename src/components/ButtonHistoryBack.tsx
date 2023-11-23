import { ActionIcon, Tooltip } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { memo } from "react";
import { useTranslation } from "next-i18next";

import { useStableNavigate } from "../providers/Navigate";

export const ButtonHistoryBack = memo(() => {
  const navigate = useStableNavigate();
  const { t } = useTranslation("common");

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Tooltip label={t("button.back")} position="right">
      <ActionIcon variant="filled" radius="xl" size="lg" onClick={handleClick}>
        <IconArrowLeft size={20} />
      </ActionIcon>
    </Tooltip>
  );
});
