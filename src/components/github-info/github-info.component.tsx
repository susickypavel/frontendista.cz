import React from "react";
import useSWR from "swr";
import { css } from "@emotion/core";

import IndexPageBox from "~/common/index-page-box.component";
import { fetcher, formatDate } from "~/utils/helpers";
import { baseButton } from "../about-info/about-info.component";
import { GithubData } from "~/utils/github/api";

interface Props {
  githubData: GithubData;
}

const GithubInfo: React.FC<Props> = ({ githubData }) => {
  const { error, data } = useSWR<GithubData, Error>("/api/github", fetcher, {
    initialData: githubData,
  });

  console.log({
    error,
    data,
  });

  const {
    viewer: {
      avatarUrl,
      createdAt: accountCreatedAt,
      url,
      repository: {
        diskUsage,
        isPrivate,
        name,
        primaryLanguage,
        updatedAt: repositoryUpdatedAt,
        createdAt: repositoryCreatedAt,
      },
    },
  } = data!;

  const formattedAccountCreatedAt = formatDate(accountCreatedAt);
  const formattedRepositoryCreatedAt = formatDate(repositoryCreatedAt);
  const formattedRepositoryUpdatedAt = formatDate(repositoryUpdatedAt);

  return (
    <IndexPageBox headerText="My Github">
      {error && (
        <small css={errorMessage}>Couldn't fetch newer data: {error.message}</small>
      )}
      {data && (
        <div css={boxHolder}>
          <div css={boxColumn}>
            <h3>Profile</h3>
            <p>
              Member since:{" "}
              <b>
                <time dateTime={accountCreatedAt}>{formattedAccountCreatedAt}</time>
              </b>
            </p>
            <button
              css={[
                baseButton,
                css({
                  marginTop: 8,
                }),
              ]}
            >
              <a href={url}>VISIT MY GITHUB</a>
            </button>
          </div>
          <div css={boxColumn}>
            <h3>Repository - {name}</h3>
            <p>
              Created:{" "}
              <b>
                <time dateTime={repositoryCreatedAt}>{formattedRepositoryCreatedAt}</time>
              </b>
              <br />
              Updated:{" "}
              <b>
                <time dateTime={formattedRepositoryUpdatedAt}>
                  {formattedRepositoryUpdatedAt}
                </time>
              </b>
              <br />
              Disk usage: {diskUsage} KB ({(diskUsage / 1000).toFixed(1)} MB) <br />
              Private: {String(isPrivate)} <br />
              Main language:{" "}
              <span
                css={css({
                  color: primaryLanguage.color,
                })}
              >
                {primaryLanguage.name}
              </span>
            </p>
          </div>
        </div>
      )}
    </IndexPageBox>
  );
};

const boxColumn = css({
  flex: "1 0 50%",
  "& h3": {
    fontSize: "24px",
    marginBottom: "16px",
    textDecoration: "underline",
  },
  "& p": {
    fontSize: "22px",
    lineHeight: 1.5,
  },
  "@media (max-width: 768px)": {
    marginBottom: "16px",
  },
  "&:last-child": {
    marginBottom: 0,
  },
});

const boxHolder = css({
  display: "flex",
  "@media (max-width: 768px)": {
    flexFlow: "column",
  },
});

const errorMessage = css({
  marginBottom: "16px",
  display: "block",
});

export default GithubInfo;
