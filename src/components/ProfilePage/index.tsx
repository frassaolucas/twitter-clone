import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Lucas Frassão</h1>
        <h2>@frassaolucas</h2>

        <p>Desenvolvedor Frontend</p>

        <ul>
          <li>
            <LocationIcon />
            Santa Catarina, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 08 de fevereiro de 1991
          </li>
        </ul>

        <Followage>
          <span>
            seguindo
            <strong> 192</strong>
          </span>
          <span>
            <strong>13 </strong>
            seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
