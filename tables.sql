create table USER_DETAILS(
     USER_ID varchar2(100),
     USER_EMAIL varchar2(100),
     USER_NAME varchar2(100),
     LONG_CHALLENGE varchar2(1),
     SHORT_CHALLENGE varchar2(1),
     HACKATHONS varchar2(1)
     )
create table USER_PREFERENCES(
            USER_ID varchar2(100),
            PLATFORMS_SUBSCRIBED varchar2(100)
            )
create table PLATFORMS_CONTESTS
             PLATFORM_ID varchar2(100),
             PLATFORM_NAME varchar2(100),
             CONTEST_ID varchar2(100),
             CONTEST_NAME varchar2(100),
             CONTEST_START_TIME DATE,
             CONTEST_END_TIME DATE,
             CONTEST_DESCRIPTION varchar2(1000)
             )
CREATE TABLE API_LINKS(
            API_ID VARCHAR2(100),
            API_LINK VARCHAR2(1000)
      )
