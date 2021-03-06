USE [DB_A49E03_testapp]
GO

/****** Object:  Table [dbo].[Persons]    Script Date: 11/3/2020 8:14:06 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Users](
	[user_id] [int] IDENTITY(1,1) NOT NULL,
	[email] [varchar](150) NOT NULL,
	[password] [varchar](150) NOT NULL,
	[first_names] [varchar](150) NOT NULL,
	[last_names] [varchar](150) NULL,
	[is_active] [bit] NOT NULL,
	[created_at] [datetime] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Users] ADD  DEFAULT ((1)) FOR [is_active]
GO

ALTER TABLE [dbo].[Users] ADD  DEFAULT (getdate()) FOR [created_at]
GO


