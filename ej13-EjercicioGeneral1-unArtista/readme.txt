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
descripcion varchar,
problema int
)

insert into pintor (nombre, celular) 
values ('javier',091245882);
