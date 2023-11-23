import { Box, Flex, Space, Text, Title, UnstyledButton } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { memo } from "react";
import { useTranslation } from "next-i18next";

import { useSearchValues, useSetSearchValues } from "../providers/Search";
import { genres } from "../utils/genres";
import classes from "./Genre.module.css";

export const GenreList = memo(() => {
  const { t } = useTranslation("common");

  return (
    <>
      <Title order={2}>{t("genre.title")}</Title>
      <Space h="lg" />
      <Flex gap={20} wrap="wrap">
        {genres.map((genre) => (
          <Genre key={genre.name} genre={genre} />
        ))}
      </Flex>
    </>
  );
});

const Genre = memo(
  ({
    genre,
  }: {
    genre: {
      name: string;
      color: string;
      colorHover: string;
    };
  }) => {
    const { hovered, ref } = useHover();
    const setSearchValues = useSetSearchValues();
    const searchValues = useSearchValues();

    const handleClick = () => {
      setSearchValues({ ...searchValues, q: genre.name });
    };

    return (
      <UnstyledButton onClick={handleClick}>
        <Box
          ref={ref}
          className={classes.item}
          style={{
            border: `solid 4px ${genre.color}`,
            backgroundColor: hovered ? genre.color : undefined,
          }}
        >
          <Text className={classes.text}>{genre.name}</Text>
        </Box>
      </UnstyledButton>
    );
  },
);
