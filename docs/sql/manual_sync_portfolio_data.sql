-- Execucao manual no Supabase SQL Editor.
-- Objetivo: sincronizar dados publicos do portfolio de forma versionada.
-- Nao execute automaticamente via CI/CD.

begin;

-- Garante colunas de curriculo online para PT/EN.
alter table public.profile
  add column if not exists resume_ptbr_url text,
  add column if not exists resume_enus_url text;

-- Mantem apenas um perfil ativo na V1.
delete from public.profile;

insert into public.profile (
  name,
  role,
  location,
  short_bio,
  github_url,
  linkedin_url,
  email_url,
  resume_ptbr_url,
  resume_enus_url,
  skills
)
values (
  'Guilherme Souza',
  'Desenvolvedor de Software & Analista de Dados',
  'Belo Horizonte, MG, Brasil',
  'Desenvolvedor de Software e Analista de Dados com +3 anos de experiência em full-stack, análise de dados e coordenação de projetos tecnológicos.',
  'https://github.com/yG2y',
  'https://www.linkedin.com/in/g2souza',
  'mailto:g2002souzajardim@gmail.com',
  'https://yg2y.github.io/Curriculum/curriculo_guilherme_ptbr.html',
  'https://yg2y.github.io/Curriculum/resume_guilherme_enus.html',
  array[
    'Java',
    'Python',
    'TypeScript',
    'React',
    'Next.js',
    'Spring Boot',
    'Docker',
    'Supabase',
    'PostgreSQL',
    'Power BI'
  ]
);

-- Sincroniza projetos de destaque.
delete from public.projects;

insert into public.projects (
  name,
  description,
  url,
  stack,
  featured,
  order_index
)
values
(
  'Sistema de Logística Distribuída',
  'Sistema distribuído com 5 microsserviços Spring Boot, API Gateway JWT, RabbitMQ, simulação AWS Lambda e app Flutter, orquestrado com Docker Compose.',
  'https://github.com/yG2y/Sistema-de-Logistica-Distribuida',
  array['Java', 'Spring Boot', 'RabbitMQ', 'Docker', 'Python', 'Flutter', 'PostgreSQL', 'Microsserviços'],
  true,
  1
),
(
  'Task Management System (Java + React)',
  'Sistema de tarefas com CRUD completo, API Spring Boot 3 e frontend React, com documentação OpenAPI e deploy cloud.',
  'https://github.com/yG2y/lab-des-soft',
  array['Java 21', 'Spring Boot 3', 'React', 'PostgreSQL', 'OpenAPI', 'Render'],
  true,
  2
);

commit;
