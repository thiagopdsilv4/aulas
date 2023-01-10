import PropTypes from 'prop-types'


function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = { //com letra minúscula é do próprio componente que estamos criando, com maiúscula é do PropTypes importado
    marca: PropTypes.string.isRequired, //dizendo que a marca é um string com o isRequired, ele roda porém reclama no inspecionar.
    ano_lancamento: PropTypes.number
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item