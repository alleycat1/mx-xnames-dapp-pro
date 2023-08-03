import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { CssVariables } from "styles/glob-styles"
import { usePagination, UsePaginationProps } from "@material-ui/lab/Pagination"
import { FC } from "react"
import styled from "styled-components"
// import  ArrowLeftIcon  from "images/icons/minArrowLeft.svg"
// import  ArrowRightIcon  from "images/icons/minArrowRight.svg"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ul: {
      width: "100%",
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",

      "& .MuiPaginationItem-page": {
        color: CssVariables.GrayWhite,
        background: "transparent",
        border: "none",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        fontWeight: "500",
        fontSize: "14px",
        marginRight: "5px",
        [theme.breakpoints.down("md")]: {
          width: "30px",
          height: "30px",
          margin: "0 5px",
        },
      },
      "& .Mui-selected": {
        background: CssVariables.GrayWhite,
        color: CssVariables.GrayWhite,
      },
      "& .MuiPaginationItem-page:hover": {
        background: CssVariables.GrayWhite,
        color: CssVariables.GrayWhite,
      },
      "& .Mui-button": {
        background: "transparent",
        color: CssVariables.GrayWhite,
        border: "none",
        margin: "auto",
        padding: "5px 12px",
        borderRadius: "8px",
        fontSize: "14px",
        height: "40px",
        fontWeight: "500",
        [theme.breakpoints.down("md")]: {
          padding: "4px 8px",
          fontSize: "13px",
          height: "30px",
        },
      },
      "& .Mui-button:hover": {
        background: CssVariables.GrayWhite,
        color: CssVariables.GrayWhite,
      },

      "& .Mui-button span": {
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
      "& .Mui-dots": {
        color: CssVariables.GrayWhite,
      },

      "& li:first-child": {
        marginRight: "auto",
        textTransform: "capitalize",
        [theme.breakpoints.down("md")]: {
          marginLeft: "15px",
        },
      },

      "& li:last-child ": {
        marginLeft: "auto",
        textTransform: "capitalize",
        [theme.breakpoints.down("md")]: {
          marginRight: "15px",
        },
      },
    },
  })
)

export const BPagination: FC<UsePaginationProps> = ({
  count,
  onChange,
  page,
}) => {
  const classes = useStyles()
  const { items } = usePagination({
    count,
    boundaryCount: 2,
    siblingCount: 1,
    onChange,
    page,
  })

  return (
    <nav>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children: null | JSX.Element = null

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = <span className="Mui-dots">…</span>
          } else if (type === "page") {
            children = (
              <StyledButton
                className={`MuiPaginationItem-page ${
                  selected ? "Mui-selected" : "Mui-unselected"
                }`}
                type="button"
                {...item}
              >
                {page}
              </StyledButton>
            )
          } else {
            if (type === "previous") {
              children = (
                <StyledButton className="Mui-button" type="button" {...item}>
                  <IconBox>{/* <ArrowLeftIcon /> */}</IconBox>
                  <span>Previous</span>
                </StyledButton>
              )
            }
            if (type === "next") {
              children = (
                <StyledButton className="Mui-button" type="button" {...item}>
                  <span>Next</span>
                  <IconBox>{/* <ArrowRightIcon /> */}</IconBox>
                </StyledButton>
              )
            }
          }

          return <li key={index}>{children}</li>
        })}
      </ul>
    </nav>
  )
}

const IconBox = styled.span`
  svg {
    width: 20px;
    height: 20px;
    path {
      stroke: ${CssVariables.GrayWhite};
    }
  }
`

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    ${IconBox} {
      svg {
        path {
          stroke: ${CssVariables.GrayWhite};
        }
      }
    }
  }
`
