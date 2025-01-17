// A ideia é organizar os termos pelo contexto onde eles são usados
const pt = {
  nomeApp: 'Jornada Solar',
  errosAuth: {
    emailInvalido: 'E-mail inválido',
    emailJaCadastrado: 'E-mail já cadastrado',
    senhaFraca: 'A senha deve ter 6 caracteres ou mais',
    senhaErrada:
      'Senha incorreta. Tente novamente ou clique em "Esqueceu a senha?" para redefini-la',
    emailNaoEncontrado: 'E-mail não encontrado',
    linkExpirado:
      'O link para redefinir a senha expirou. Clique em "Esqueci minha senha" na tela de login e solicite novamente.'
  },
  login: {
    saudacao: 'Oi! Que bom te ver por aqui',
    email: 'E-mail',
    senha: 'Senha',
    entrar: 'Entrar',
    esqueciSenha: 'Esqueci minha senha'
  },
  home: {
    comecarJornada: 'Começar Jornada',
    tenhoCadastro: 'Já tenho cadastro',
    versao: 'versão',
    frase:
      'Embarque em uma jornada de autoconhecimento e monitore seus hábitos e emoções'
  },
  cadastro: {
    parabens: 'Olá! Parabéns por começar sua jornada',
    perguntaNome: 'Para começar, como gostaria de ser chamado?',
    continuar: 'Continuar',
    prazerConhecer: 'É um prazer te conhecer, %{nome}!',
    perguntaObjetivos: 'Quais são seus principais objetivos?',
    objetivos: {
      autoconhecimento: 'Autoconhecimento',
      habitos: 'Monitorar hábitos',
      emocoes: 'Monitorar emoções',
      escrever: 'Escrever sobre meu dia',
      outros: 'Outros'
    },
    vamosAjudar: 'Legal, vamos te ajudar com isso!',
    perguntaSentimentos: 'Como você está se sentindo nesse momento?',
    perguntaHabitos: 'O que você fez hoje?',
    faltaUmPasso: 'Só falta um passo!',
    crieCadastro: 'Crie um cadastro e salve seus dados',
    email: 'E-mail',
    senha: 'Senha',
    perguntaLivro: 'Você já tem o livro da Jornada Solar?',
    opcoesLivro: {
      TemLivro: 'Sim, tenho!',
      NaoTemLivro: 'Não tenho',
      QueroSaberMais: 'Não, mas quero saber mais '
    },
    pronto: 'Pronto!'
  },
  recuperarSenha: {
    titulo: 'Opa! Vamos dar um jeito nisso',
    enviaremosLink:
      'Te enviaremos um link por email para criar uma nova senha.',
    linkEnviado:
      'Um link para redefinir sua senha foi enviado para %{email}, verifique sua caixa de entrada ou spam.',
    enviar: 'Enviar'
  },
  menuInferior: {
    registros: 'Registros',
    graficos: 'Gráficos',
    meditacoes: 'Meditações'
  },
  diario: {
    bomDia: 'Bom dia',
    boaTarde: 'Boa tarde',
    boaNoite: 'Boa noite',
    mensagem: {
      inicio: 'Hoje o ',
      sol: 'Sol',
      final: 'está no signo de %{signo} e a Lua está na fase %{faseDaLua}.'
    },
    perfil: 'Perfil',
    sentimentos: 'Preencher sentimentos',
    habitos: 'Preencher hábitos',
    anotacoes: 'Escrever sobre seu dia',
    verMais: 'Ver mais'
  },
  signos: {
    capricornio: 'Capricórnio',
    aquario: 'Aquário',
    peixes: 'Peixes',
    aries: 'Áries',
    touro: 'Touro',
    gemeos: 'Gêmeos',
    cancer: 'Câncer',
    leao: 'Leão',
    virgem: 'Virgem',
    libra: 'Libra',
    escorpiao: 'Escorpião',
    sagitario: 'Sagitário'
  },
  fasesDaLua: {
    nova: 'Nova',
    crescenteInicio: 'Crescente',
    crescente: 'Crescente',
    crescenteFinal: 'Crescente',
    cheia: 'Cheia',
    minguanteInicio: 'Minguante',
    minguante: 'Minguante',
    minguanteFinal: 'Minguante'
  },
  comum: {
    formatoDataExtenso: "EEEE, d 'de' MMMM",
    sentimentos: 'Sentimentos',
    habitos: 'Hábitos',
    anotacoes: 'Anotações',
    editar: 'Editar',
    concluir: 'Concluir',
    voltar: 'Voltar',
    salvar: 'Salvar'
  },
  mensagensAlerta: {
    registroSucesso: 'Cadastro realizado com sucesso',
    registroFalha: 'O cadastro falhou',
    atualizacaoSucesso: 'O %{tipo} foi atualizado com sucesso.',
    atualizacaoFalha: 'A atualização do %{tipo} falhou.',
    criacaoFalha: 'A criação do %{tipo} falhou.',
    alteracaoSenhaSucesso: 'A senha foi alterada com sucesso'
  },
  edicao: {
    tituloEdicao: 'Edição de %{tipo}',
    tituloNovo: 'Novo %{tipo}',
    novoSentimento: '+ Criar novo',
    emoji: 'Emoji',
    sentimento: 'Sentimento',
    erroEmoji: 'Por favor adicione um emoji',
    erroNome: 'Por favor adicione um nome',
    novoHabito: 'Novo hábito',
    habito: 'Hábito'
  },
  graficos: {
    emocoes: 'Emoções',
    habitos: 'Hábitos',
    textoEmocoes: 'Acompanhe a frequência de cada emoção ao longo do mês:',
    textoHabitos:
      'Esses hábitos tiveram o maior impacto em sua vida neste mês:',
    textoVazio: 'Ainda não existem registros nesse mês'
  },
  perfil: {
    editarPerfil: 'Editar Perfil',
    meusDados: 'Meus Dados',
    notificacoes: 'Notificações',
    ajuda: 'Ajuda',
    textoAjuda: 'Precisa de ajuda? Envie um e-mail para jornadasolar@gmail.com',
    sair: 'Sair',
    ok: 'Ok',
    notificaEventos: 'Eventos do Jornada Solar',
    alterarNome: 'Alterar nome',
    alterarSenha: 'Alterar senha',
    nome: 'Nome',
    senha: 'Senha',
    novaSenha: 'Nova senha',
    confirmaSenha: 'Confirme sua nova senha',
    erroConfirmaSenha: 'A confirmação é diferente da nova senha',
    erroSenhaAtual: 'Senha atual incorreta'
  },
  audio: {
    mensagemErro: 'Houve um problema com o áudio'
  },
  novidade: {
    novo: 'Novo'
  },
  notificacoes: {
    tresDias: 'Ei, já faz um tempo. Como você está se sentindo hoje?'
  }
}
export default pt
