create table pintor (
id serial primary key,
nombre varchar(20),
celular int
)

drop table pintor


create table cliente (
id serial primary key,
nombrecliente varchar,
direccion varchar,
departamento int
)

create table contrato (
idcontrato serial primary key,
idcliente int,
listaPintores int[],
m2 int,
costo int
)

create table jornada (
idjornada serial primary key,
idcontrato int,
idpintor int,
m2 int,
descripcion varchar(200),
problema int
)

create table estadodecontrato (
idcontrato int,
m2totales int,
m2hechos int
)

insert into pintor (nombre, celular) 
values ('javier',091245882);






insert into contrato (idcliente, listapintores, m2, costo) values ('2', '{2,3,5}', '450','7600' )