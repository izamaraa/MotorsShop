import app from './app';
import AppDataSource from './data-source';

(async () => {
    await AppDataSource.initialize()
        .then(() => console.log('Data Source has been initialized!'))
        .catch((err) => {
            console.error('Error during Data Source initialization', err);
        });

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Servidor executando na porta ${port}!`);
    });
})();
