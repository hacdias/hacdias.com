---
title: PostgreSQL
published: 2022-08-17T17:51:10.64983984+02:00
updated: 2022-08-17T17:53:05.202252637+02:00
section:
- notes
createdWith: https://hacdias.com/
noIndex: true
---

## Upgrade Version in Docker

First, ensure there is a backup:

```bash
docker-compose exec {service} pg_dumpall -U {postgres_user} > dump.sql
```

Stop and remove the Docker container:

```bash
docker-compose stop {service}
docker-compose rm -f {service}
```

Delete the data volume. Then, upgrade the version in `docker-compose.yaml` and start containers again.

Finally, import using the following command:

```bash
docker-compose exec {service} bash
psql -U {user} -d {database} < {mounted_directory}/dump.sql
```

### 13 to 14

The type of password changed, please run:

```bash
psql -U {user}
ALTER ROLE {user} WITH PASSWORD '{password}';
```
