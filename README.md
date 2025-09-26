# Distribuição dos Componentes em `App.tsx`

Abaixo está a relação dos componentes React Native solicitados, indicando **em que parte do código** (`App.tsx`) aparecem e **como são utilizados na interface**:

| Componente         | Onde aparece no código (`App.tsx`)         | Como aparece na tela (descrição de uso)           |
|--------------------|--------------------------------------------|---------------------------------------------------|
| **View**           | Envolvendo blocos de interface, cartões, modal | Estrutura visual, agrupando outros componentes, cartões de exemplo, conteúdo do modal |
| **Text**           | Títulos, descrições, itens de lista, botões | Exibe textos, títulos, descrições, rótulos, itens de lista, textos em botões |
| **TextInput**      | Dentro de um cartão de componente          | Campo para digitação de dados pelo usuário         |
| **Button**         | Em cartões de exemplo, dentro do modal     | Botão padrão para acionar funções (abrir modal, mostrar alerta, fechar modal) |
| **Alert**          | Em funções onPress de Button e TouchableOpacity | Mostra pop-up de alerta ao usuário ao clicar nos botões |
| **Image**          | Dentro de um cartão de componente          | Exibe uma imagem de exemplo                        |
| **Modal**          | Após clicar em "Abrir Modal"               | Janela sobreposta para informações extras, com botão de fechar |
| **ActivityIndicator** | Dentro de um cartão de componente       | Indicador de loading (spinner)                     |
| **FlatList**       | Dentro de um cartão de componente          | Lista rolável de dados (itens de exemplo)          |
| **SafeAreaView**   | No topo do componente principal            | Garante visualização em áreas seguras do aparelho  |
| **ScrollView**     | Envolvendo todo o conteúdo principal       | Permite rolagem vertical do conteúdo da tela       |
| **SectionList**    | Dentro de um cartão de componente          | Lista com divisões/seções (Grupo A, Grupo B)       |
| **StatusBar**      | No início do componente principal          | Personaliza a barra de status do dispositivo       |
| **Switch**         | Dentro de um cartão de componente          | Alternador de estado (on/off)                      |
| **TouchableOpacity** | Dentro de um cartão de componente        | Área clicável customizada, mostra alerta ao clicar |

> **Observação:**  
> Cada componente está organizado em cartões (`View` com estilo `componentCard`) dentro do `ScrollView`. O `Modal` aparece sobreposto quando ativado. `FlatList` e `SectionList` exibem listas de dados. `Alert` é chamado ao pressionar botões. O `SafeAreaView` envolve toda a aplicação para garantir a segurança visual em diferentes dispositivos.

