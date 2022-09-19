<template>
    <div>
        <HeaderComponent />
        <div class="container d-flex flex-lg-row flex-column mt-3 mb-3">
            <div class="container-product-image m-2 d-flex flex-column">
                <div class="image-preview p-3" id="imagePreview">
                    <img src="" alt="Image Preview" class="image-preview__image">
                    <div class="image-preview__default-text d-flex flex-column align-items-center">
                        <far class="pe-3" style="width: 30px; height: 30px; opacity: 70%;" icon="image"/>
                        Adicionar imagem
                    </div>
                </div>
                <input type="file" name="inpFile" class="form-control form-control-sm text-center" id="inpFile">
            </div>
            <div class="container-product-infos m-2">
                <form class="form-cadastro p-4 d-flex flex-column">
                    <label>Categoria</label>
                    <select class="form-select" id="select-categorias" required="required">
                        <option selected>Selecione</option>
                        <option value="Livros">Livros</option>
                        <option value="Notebooks">Notebooks</option>
                        <option value="Jogos">Jogos</option>
                        <option value="Eletrodomésticos">Eletrodomésticos</option>
                    </select>

                    <div class="input-group mt-3">
                        <label>Nome do produto</label>
                        <input type="text" class="input-text ps-3" required="required"/>
                    </div>

                    <div class="input-group mt-3">
                        <label>Descrição</label>
                        <textarea class="input-text ps-3 pt-2" required="required"></textarea>
                    </div>

                    <div class="d-flex flex-row">
                        <div class="input-group w-50 mt-3 me-4">
                            <label>Preço unitário</label>
                            <input type="text" class="ps-3" required="required"/>
                        </div>

                        <div class="input-group w-50 mt-3">
                            <label>Quantidade em estoque</label>
                            <input type="number" min="1" class="ps-3" required="required"/>
                        </div>
                    </div>

                    <!-- div categoria "Livros" -->
                    <div id="form-livros" style="display: none;">
                        <label class="mt-3">Gênero</label>
                        <select class="form-select" id="select-genero" required="required">
                            <option selected>Selecione</option>
                            <option value="Ciência">Ciência</option>
                            <option value="Computação">Computação</option>
                            <option value="Economia e Investimentos">Economia e Investimentos</option>
                            <option value="HQs">HQs</option>
                            <option value="Infantil">Infantil</option>
                            <option value="Mangás">Mangás</option>
                            <option value="Política">Política</option>
                            <option value="Romance">Romance</option>
                        </select>

                        <label class="mt-3">Idioma</label>
                        <select class="form-select" id="select-idioma" required="required">
                            <option selected>Selecione</option>
                            <option value="Espanhol">Espanhol</option>
                            <option value="Inglês">Inglês</option>
                            <option value="Português">Português</option>
                        </select>

                        <div class="input-group mt-3">
                            <label>Autor</label>
                            <input type="text" class="input-text ps-3" required="required"/>
                        </div>
                    </div>

                    <!-- div categoria "Notebooks" -->
                    <div id="form-notebooks" style="display: none;">
                        <div class="input-group mt-3">
                            <label>Marca</label>
                            <input type="text" class="input-text ps-3" required="required"/>
                        </div>

                        <div class="input-group mt-3">
                            <label>Processador</label>
                            <input type="text" class="input-text ps-3" required="required"/>
                        </div>

                        <label class="mt-3">Memória RAM</label>
                        <select class="form-select" id="select-ram" required="required">
                            <option selected>Selecione</option>
                            <option value="4GB">4GB</option>
                            <option value="8GB">8GB</option>
                            <option value="16GB">16GB</option>
                            <option value="32GB">32GB</option>
                        </select>

                        <label class="mt-3">Sistema operacional</label>
                        <select class="form-select" id="select-opSys" required="required">
                            <option selected>Selecione</option>
                            <option value="Chrome OS">Chrome OS</option>
                            <option value="Linux">Linux</option>
                            <option value="Windows">Windows</option>
                        </select>

                        <label class="mt-3">Sistema de armazenamento</label>
                        <select class="form-select" id="select-armazenamento" required="required">
                            <option selected>Selecione</option>
                            <option value="HD">HD</option>
                            <option value="SSD">SSD</option>
                        </select>

                        <!-- div sistema "HD" -->
                        <div id="form-armazenamento-hd" class="mt-3" style="display: none;">
                            <label>Capacidade de armazenamento HD</label>
                            <select class="form-select" id="select-hd" required="required">
                                <option selected>Selecione</option>
                                <option value="500GB">500GB</option>
                                <option value="1TB">1TB</option>
                            </select>
                        </div>

                        <!-- div sistema "SSD" -->
                        <div id="form-armazenamento-ssd" class="mt-3" style="display: none;">
                            <label>Capacidade de armazenamento SSD</label>
                            <select class="form-select" id="select-ssd" required="required">
                                <option selected>Selecione</option>
                                <option value="128GB">128GB</option>
                                <option value="256GB">256GB</option>
                                <option value="512GB">512GB</option>
                                <option value="1TB">1TB</option>
                            </select>
                        </div>
                    </div>

                    <!-- div categoria "Jogos" -->
                    <div id="form-jogos" style="display: none;">
                        <div class="input-group mt-3">
                            <label>Marca</label>
                            <input type="text" class="input-text ps-3" required="required"/>
                        </div>

                        <label class="mt-3">Plataforma</label>
                        <select class="form-select" id="select-genero" required="required">
                            <option selected>Selecione</option>
                            <option value="Playstation">Playstation</option>
                            <option value="Xbox">Xbox</option>
                            <option value="Nintendo Switch">Nintendo Switch</option>
                            <option value="PC">PC</option>
                        </select>
                    </div>

                    <!-- div departamento "Eletrodomésticos" -->
                    <div id="form-eletrodomesticos" style="display: none;">
                        <label class="mt-3">Categoria de eletrodoméstico</label>
                        <select class="form-select" id="select-eletrodomesticos" required="required">
                            <option selected>Selecione</option>
                            <option value="Geladeiras">Geladeiras</option>
                            <option value="Máquina de lavar">Máquinas de lavar</option>
                            <option value="Micro-ondas">Micro-ondas</option>
                        </select>

                        <label class="mt-3">Cor do produto</label>
                        <select class="form-select" id="select-cor" required="required">
                            <option selected>Selecione</option>
                            <option value="Branca">Branca</option>
                            <option value="Inox">Inox</option>
                            <option value="Cinza">Cinza</option>
                            <option value="Outra">Outra</option>
                        </select>

                        <div class="d-flex flex-row">
                            <div class="input-group w-50 mt-3 me-4">
                                <label>Voltagem</label>
                                <input type="text" class="input-text ps-3" required="required"/>
                            </div>

                            <div class="input-group w-50 mt-3">
                                <label>Capacidade</label>
                                <input type="text" class="input-text ps-3" required="required"/>
                            </div>
                        </div>

                        <!-- div categoria "Geladeiras" -->
                        <div id="form-geladeiras" class="mt-3" style="display: none;">
                            <label>Tipo de abertura</label>
                            <select class="form-select" id="select-abertura" required="required">
                                <option selected>Selecione</option>
                                <option value="French Door">French Door</option>
                                <option value="Duplex">Duplex</option>
                                <option value="Duplex Inverse">Duplex Inverse</option>
                                <option value="1 porta">1 porta</option>
                            </select>

                            <label class="mt-3">Tipo de degelo</label>
                            <select class="form-select" id="select-degelo" required="required">
                                <option selected>Selecione</option>
                                <option value="Frost Free">Frost Free</option>
                                <option value="Cycle Defrost">Cycle Defrost</option>
                                <option value="Seco">Seco</option>
                                <option value="Manual">Manual</option>
                            </select>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="botao-salvar py-1 px-5 m-4">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
    components: {
        HeaderComponent
    },
    mounted() {
        // INPUT'S CATEGORIES RENDERING
        let dropdownCategorias = document.querySelector('#select-categorias');
        let dropdownEletrodomesticos = document.querySelector('#select-eletrodomesticos')
        let dropdownArmazenamentos = document.querySelector('#select-armazenamento');
        var formLivros = document.getElementById('form-livros');
        var formJogos = document.getElementById('form-jogos');
        var formEletrodomesticos = document.getElementById('form-eletrodomesticos');
        var formGeladeiras = document.getElementById('form-geladeiras');
        var formNotebooks = document.getElementById('form-notebooks');
        var formArmazenamentoHd = document.getElementById('form-armazenamento-hd');
        var formArmazenamentoSsd = document.getElementById('form-armazenamento-ssd');

        if (dropdownCategorias) {
            dropdownCategorias.addEventListener('change', function (event) {
                var selected = event.target.value;

                if (selected == 'Livros') {
                    formLivros.style.display = 'block';
                } else {
                    formLivros.style.display = 'none';
                }

                if (selected == 'Jogos') {
                    formJogos.style.display = 'block';
                } else {
                    formJogos.style.display = 'none';
                }

                if (selected == 'Eletrodomésticos') {
                    formEletrodomesticos.style.display = 'block';

                    if (dropdownEletrodomesticos) {
                        dropdownEletrodomesticos.addEventListener('change', function (event) {
                            var selected = event.target.value;
                            if (selected == 'Geladeiras') {
                                formGeladeiras.style.display = 'block';
                            } else {
                                formGeladeiras.style.display = 'none';
                            }
                        });
                    }
                } else {
                    formEletrodomesticos.style.display = 'none';
                }

                if (selected == 'Notebooks') {
                    formNotebooks.style.display = 'block';

                    if (dropdownArmazenamentos) {
                        dropdownArmazenamentos.addEventListener('change', function (event) {
                            var selected = event.target.value;
                            if (selected == 'HD') {
                                formArmazenamentoHd.style.display = 'block';
                            } else {
                                formArmazenamentoHd.style.display = 'none';
                            }
                            if (selected == 'SSD') {
                                formArmazenamentoSsd.style.display = 'block';
                            } else {
                                formArmazenamentoSsd.style.display = 'none';
                            }
                        });
                    }
                } else {
                    formNotebooks.style.display = 'none';
                }
            });
        }

        // IMAGE UPLOAD
        const inpFile = document.getElementById('inpFile');
        const previewContainer = document.getElementById('imagePreview');
        const previewImage = previewContainer.querySelector('.image-preview__image');
        const previewDefaultText = previewContainer.querySelector('.image-preview__default-text');

        inpFile.addEventListener('change', function () {
            const file = this.files[0];

            if (file) {
                const reader = new FileReader();

                previewDefaultText.style.display = 'none';
                previewDefaultText.classList.remove('d-flex');
                previewImage.style.display = 'block';

                reader.addEventListener('load', function () {
                    previewImage.setAttribute('src', this.result);
                });
                reader.readAsDataURL(file);
            }
            else {
                previewDefaultText.style.display = null;
                previewImage.display = null;
                previewImage.setAttribute('src', '');
            }
        });
    }
}
</script>

<style scoped>
.container-product-image {
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 600px;
    border-radius: 10px;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.container-product-infos {
    background-color: white;
    height: auto;
    border-radius: 10px;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

input[type=text],
input[type=number],
select,
textarea {
    background-color: #F4F4F4;
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 40px;
}

textarea {
    height: 100px;
}

input[type=text],
input[type=number],
textarea:focus {
    outline: none;
}

.botao-salvar {
    background-color: #05F739;
    border: none;
    border-radius: 5px;
    color: white;
}

.botao-salvar:hover {
    background-color: #05d633;
}

.image-preview {
    min-width: 90%;
    min-height: 500px;
    border: 2px solid #dddddd;
    border-radius: 10px;
    border-style: dashed;
    margin-top: 15px;
    padding: 10px;

    /* Default text */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #cccccc;
}

.image-preview__image {
    display: none;
    width: 500px;
    height: 500px;
}

input[type=file] {
    margin: 15px;
    max-width: 60%;
}
</style>
