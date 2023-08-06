declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

interface IArticle {
	id: number;
	title: string;
	body: string;
}

type ArticleState = {
	articles: IArticle[];
};

type ArticleAction = {
	type: string;
	article: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction;
