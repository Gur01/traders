import { Container, Header, Section } from './components';
import { TraderScreen } from './feature';
import GlobalStyle from './theme/globalStyle';
import './theme/styles.css';

const App = () => {
    return (
        <Container>
            <GlobalStyle />
            <Section>
                <Header>Copy the best masters</Header>
            </Section>
            <TraderScreen />
        </Container>
    );
};

export default App;
