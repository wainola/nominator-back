const pgCrypto = `
CREATE EXTENSION IF NOT EXISTS pgcrypto;
`;

const users = `
create table users (
  id uuid not null primary key default gen_random_uuid(),
  name text not null,
  lastname text not null,
  email text not null,
  createdAt timestamp not null default now(),
  updatedAt timestamp,
  deletedAt timestamp
);
`;

const matches = `
create table matches (
  id uuid not null primary key default gen_random_uuid(),
  date timestamp not null,
  user_id uuid not null,
  player_id uuid not null,
  createdAt timestamp not null default now(),
  updatedAt timestamp default null,
  deletedAt timestamp default null
)
`;

const players = `
create table players (
  id uuid not null primary key default gen_random_uuid(),
  attack numeric not null,
  defense numeric not null,
  speed numeric not null,
  wellnes numeric not null,
  isGoalKeeper boolean not null,
  user_id uuid not null,
  matches_id uuid not null,
  foreign key (user_id) references users.id,
  foreign key (matches_id) references matches.id
)
`;

// const eles = ``;

module.exports = [pgCrypto, users, matches, players];
