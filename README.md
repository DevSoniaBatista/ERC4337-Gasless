https://www.youtube.com/watch?v=4FzTJNrycL0

https://github.com/DevSoniaBatista/ERC4337-Gasless

========================================================
https://www.youtube.com/watch?v=9LcpjXWTry0

Antes de começarmos, gostaria de compartilhar alguns links importantes com vocês. O primeiro é o link do OpenZeppelin Defender: https://defender.openzeppelin.com/.

utro link relevante é o do código que precisaremos inserir na Autotasks. Vocês podem encontrá-lo em: [https://raw.githubusercontent.com/thi....](https://raw.githubusercontent.com/thirdweb-dev/ozdefender-autotask/main/src/forwarder_handler.js?ref=blog.thirdweb.com) Esse código, chamado "forwarder_handler.js", é essencial para que possamos realizar as transações de forma eficiente e sem custos de gas para os usuários.

Por fim, o do site da Thirdweb para criarem sua coleção por lá: https://thirdweb.com/dashboard

Caso queiram conferir o código completo que utilizaremos durante o tutorial, podem acessar meu repositório no GitHub: https://github.com/Afonsodalvi/gaslas.... Lá vocês encontrarão todo o código necessário para criar a coleção de NFTs sem custos de gas.

Agora que já compartilhamos todos os links importantes, vamos começar o tutorial. Tenham em mente que, ao utilizar o ThirdWeb e o OpenZeppelin Defender, vocês terão a oportunidade de oferecer uma experiência mais acessível e atrativa para os usuários, eliminando a necessidade deles pagarem pelos custos de gas.

https://github.com/Afonsodalvi/gaslessOpenzeppelin



## Getting Started

Create a project using this example:

```bash
npx thirdweb create --template next-typescript-starter
```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

On `pages/_app.tsx`, you'll find our `ThirdwebProvider` wrapping your app, this is necessary for our [hooks](https://portal.thirdweb.com/react) and
[UI Components](https://portal.thirdweb.com/ui-components) to work.

### Deploy to IPFS

Deploy a copy of your application to IPFS using the following command:

```bash
yarn deploy
```

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
