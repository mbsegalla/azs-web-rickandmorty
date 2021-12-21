import React from 'react';

import rickAndMortyLogo from '../../assets/rickandmorty-logo.png';
import { Root, LogoBase, Image} from './styles';

function Header() {
  return (
    <Root>
      <LogoBase>
        <Image
          src={rickAndMortyLogo}
          alt="Rick and Morty logo"
          onClick={() => window.location.href = "/"}
        />
      </LogoBase>
    </Root>
  );
}

export default Header;
