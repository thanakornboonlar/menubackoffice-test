CREATE TABLE IF NOT EXISTS public.menus
(
    menu_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    menu_name character varying(200) COLLATE pg_catalog."default" NOT NULL,
    path character varying(500) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT menus_pkey PRIMARY KEY (menu_id),
    CONSTRAINT menus_menuname_key UNIQUE (menu_name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.menus
    OWNER to postgres;
	
INSERT INTO menus(menu_name, path) VALUES ('overview', '/');
INSERT INTO menus(menu_name, path) VALUES ('products', '/products');
INSERT INTO menus(menu_name, path) VALUES ('new products', '/new-products');
INSERT INTO menus(menu_name, path) VALUES ('account', '/account');