import { http } from "./config";

export default {

    listar:()=>{
        return http.get('produtos')
    },
    salvar:(produto)=>{
        console.log('teste ok')
        return http.post('produto',produto)
       
    },
    atualizar:(produto)=>{
		return http.put('produto',produto);
  },
  apagar:(produto)=>{
    return http.delete('produto', { data: produto })
}
}