import { createStyles, Header, Autocomplete, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    flexGrow: 1,
    display: "flex",
    width: "100%",
  },

  inner: {
    height: 56,
    display: "flex",
    width: "100%",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

interface HeaderSearchProps {
  links?: { link: string; label: string }[];
}

const HeaderSearch = ({ links }: HeaderSearchProps) => {
  const { classes } = useStyles();

  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
          <div
            style={{
              fontWeight: 700,
              fontSize: "40px",
            }}
          >
            NEdu
          </div>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
          />
        </Group>
      </div>
    </Header>
  );
};

export default HeaderSearch;
