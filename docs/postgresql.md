```bash
docker-compose up
docker-compose exec db bash -c 'psql -U postgres -c "select * from m_user"'
```