'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">back-end-m4 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-aed17954c926d700d735b52654c134095260df6a2f58c04d017be1a8cb6e8e821635aab647231e3c5bca5d1022a8043ba543fda21a87603f06d8d92195424f57"' : 'data-target="#xs-controllers-links-module-AppModule-aed17954c926d700d735b52654c134095260df6a2f58c04d017be1a8cb6e8e821635aab647231e3c5bca5d1022a8043ba543fda21a87603f06d8d92195424f57"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-aed17954c926d700d735b52654c134095260df6a2f58c04d017be1a8cb6e8e821635aab647231e3c5bca5d1022a8043ba543fda21a87603f06d8d92195424f57"' :
                                            'id="xs-controllers-links-module-AppModule-aed17954c926d700d735b52654c134095260df6a2f58c04d017be1a8cb6e8e821635aab647231e3c5bca5d1022a8043ba543fda21a87603f06d8d92195424f57"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-aed17954c926d700d735b52654c134095260df6a2f58c04d017be1a8cb6e8e821635aab647231e3c5bca5d1022a8043ba543fda21a87603f06d8d92195424f57"' : 'data-target="#xs-injectables-links-module-AppModule-aed17954c926d700d735b52654c134095260df6a2f58c04d017be1a8cb6e8e821635aab647231e3c5bca5d1022a8043ba543fda21a87603f06d8d92195424f57"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-aed17954c926d700d735b52654c134095260df6a2f58c04d017be1a8cb6e8e821635aab647231e3c5bca5d1022a8043ba543fda21a87603f06d8d92195424f57"' :
                                        'id="xs-injectables-links-module-AppModule-aed17954c926d700d735b52654c134095260df6a2f58c04d017be1a8cb6e8e821635aab647231e3c5bca5d1022a8043ba543fda21a87603f06d8d92195424f57"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-8643790471720ef6a039dd6b63d13b9e9a5d8bbcdbb3680dbad1ee564e73b21a5ffeb971e19d7bc1b73ee9865446ad116ba9b5c9eb312ba81065290ee4eed9f1"' : 'data-target="#xs-controllers-links-module-AuthModule-8643790471720ef6a039dd6b63d13b9e9a5d8bbcdbb3680dbad1ee564e73b21a5ffeb971e19d7bc1b73ee9865446ad116ba9b5c9eb312ba81065290ee4eed9f1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-8643790471720ef6a039dd6b63d13b9e9a5d8bbcdbb3680dbad1ee564e73b21a5ffeb971e19d7bc1b73ee9865446ad116ba9b5c9eb312ba81065290ee4eed9f1"' :
                                            'id="xs-controllers-links-module-AuthModule-8643790471720ef6a039dd6b63d13b9e9a5d8bbcdbb3680dbad1ee564e73b21a5ffeb971e19d7bc1b73ee9865446ad116ba9b5c9eb312ba81065290ee4eed9f1"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-8643790471720ef6a039dd6b63d13b9e9a5d8bbcdbb3680dbad1ee564e73b21a5ffeb971e19d7bc1b73ee9865446ad116ba9b5c9eb312ba81065290ee4eed9f1"' : 'data-target="#xs-injectables-links-module-AuthModule-8643790471720ef6a039dd6b63d13b9e9a5d8bbcdbb3680dbad1ee564e73b21a5ffeb971e19d7bc1b73ee9865446ad116ba9b5c9eb312ba81065290ee4eed9f1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-8643790471720ef6a039dd6b63d13b9e9a5d8bbcdbb3680dbad1ee564e73b21a5ffeb971e19d7bc1b73ee9865446ad116ba9b5c9eb312ba81065290ee4eed9f1"' :
                                        'id="xs-injectables-links-module-AuthModule-8643790471720ef6a039dd6b63d13b9e9a5d8bbcdbb3680dbad1ee564e73b21a5ffeb971e19d7bc1b73ee9865446ad116ba9b5c9eb312ba81065290ee4eed9f1"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoriteModule.html" data-type="entity-link" >FavoriteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FavoriteModule-3ee1d052cb8f315cc3ea572af79442af120dba773bddb1f2ecf7b123aae4ac9542a351bce8560b43671b4d43b01da201d3e5b068bfd17232a184ed3931838d5c"' : 'data-target="#xs-controllers-links-module-FavoriteModule-3ee1d052cb8f315cc3ea572af79442af120dba773bddb1f2ecf7b123aae4ac9542a351bce8560b43671b4d43b01da201d3e5b068bfd17232a184ed3931838d5c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FavoriteModule-3ee1d052cb8f315cc3ea572af79442af120dba773bddb1f2ecf7b123aae4ac9542a351bce8560b43671b4d43b01da201d3e5b068bfd17232a184ed3931838d5c"' :
                                            'id="xs-controllers-links-module-FavoriteModule-3ee1d052cb8f315cc3ea572af79442af120dba773bddb1f2ecf7b123aae4ac9542a351bce8560b43671b4d43b01da201d3e5b068bfd17232a184ed3931838d5c"' }>
                                            <li class="link">
                                                <a href="controllers/FavoriteController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoriteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FavoriteModule-3ee1d052cb8f315cc3ea572af79442af120dba773bddb1f2ecf7b123aae4ac9542a351bce8560b43671b4d43b01da201d3e5b068bfd17232a184ed3931838d5c"' : 'data-target="#xs-injectables-links-module-FavoriteModule-3ee1d052cb8f315cc3ea572af79442af120dba773bddb1f2ecf7b123aae4ac9542a351bce8560b43671b4d43b01da201d3e5b068bfd17232a184ed3931838d5c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FavoriteModule-3ee1d052cb8f315cc3ea572af79442af120dba773bddb1f2ecf7b123aae4ac9542a351bce8560b43671b4d43b01da201d3e5b068bfd17232a184ed3931838d5c"' :
                                        'id="xs-injectables-links-module-FavoriteModule-3ee1d052cb8f315cc3ea572af79442af120dba773bddb1f2ecf7b123aae4ac9542a351bce8560b43671b4d43b01da201d3e5b068bfd17232a184ed3931838d5c"' }>
                                        <li class="link">
                                            <a href="injectables/FavoriteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoriteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link" >GameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GameModule-8a665199c420a0733641c455c63bf05929679d8e1e2afe3dc776d8aaece392cc0f908a2ef6f1aa140a404e47d9d841299225e4194a74a4c3fb65215c87b3c5ed"' : 'data-target="#xs-controllers-links-module-GameModule-8a665199c420a0733641c455c63bf05929679d8e1e2afe3dc776d8aaece392cc0f908a2ef6f1aa140a404e47d9d841299225e4194a74a4c3fb65215c87b3c5ed"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GameModule-8a665199c420a0733641c455c63bf05929679d8e1e2afe3dc776d8aaece392cc0f908a2ef6f1aa140a404e47d9d841299225e4194a74a4c3fb65215c87b3c5ed"' :
                                            'id="xs-controllers-links-module-GameModule-8a665199c420a0733641c455c63bf05929679d8e1e2afe3dc776d8aaece392cc0f908a2ef6f1aa140a404e47d9d841299225e4194a74a4c3fb65215c87b3c5ed"' }>
                                            <li class="link">
                                                <a href="controllers/GameController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GameModule-8a665199c420a0733641c455c63bf05929679d8e1e2afe3dc776d8aaece392cc0f908a2ef6f1aa140a404e47d9d841299225e4194a74a4c3fb65215c87b3c5ed"' : 'data-target="#xs-injectables-links-module-GameModule-8a665199c420a0733641c455c63bf05929679d8e1e2afe3dc776d8aaece392cc0f908a2ef6f1aa140a404e47d9d841299225e4194a74a4c3fb65215c87b3c5ed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GameModule-8a665199c420a0733641c455c63bf05929679d8e1e2afe3dc776d8aaece392cc0f908a2ef6f1aa140a404e47d9d841299225e4194a74a4c3fb65215c87b3c5ed"' :
                                        'id="xs-injectables-links-module-GameModule-8a665199c420a0733641c455c63bf05929679d8e1e2afe3dc776d8aaece392cc0f908a2ef6f1aa140a404e47d9d841299225e4194a74a4c3fb65215c87b3c5ed"' }>
                                        <li class="link">
                                            <a href="injectables/GameService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GenreModule.html" data-type="entity-link" >GenreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GenreModule-2c8a44301fdf7450744b2927044ef051221377ee9876ba85bb9d28fd5817b818ed479f77e72ddb37482dad84a960b8d3cb040b6b0e4c9bba968ce3eac9950f7b"' : 'data-target="#xs-controllers-links-module-GenreModule-2c8a44301fdf7450744b2927044ef051221377ee9876ba85bb9d28fd5817b818ed479f77e72ddb37482dad84a960b8d3cb040b6b0e4c9bba968ce3eac9950f7b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GenreModule-2c8a44301fdf7450744b2927044ef051221377ee9876ba85bb9d28fd5817b818ed479f77e72ddb37482dad84a960b8d3cb040b6b0e4c9bba968ce3eac9950f7b"' :
                                            'id="xs-controllers-links-module-GenreModule-2c8a44301fdf7450744b2927044ef051221377ee9876ba85bb9d28fd5817b818ed479f77e72ddb37482dad84a960b8d3cb040b6b0e4c9bba968ce3eac9950f7b"' }>
                                            <li class="link">
                                                <a href="controllers/GenreController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenreController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GenreModule-2c8a44301fdf7450744b2927044ef051221377ee9876ba85bb9d28fd5817b818ed479f77e72ddb37482dad84a960b8d3cb040b6b0e4c9bba968ce3eac9950f7b"' : 'data-target="#xs-injectables-links-module-GenreModule-2c8a44301fdf7450744b2927044ef051221377ee9876ba85bb9d28fd5817b818ed479f77e72ddb37482dad84a960b8d3cb040b6b0e4c9bba968ce3eac9950f7b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GenreModule-2c8a44301fdf7450744b2927044ef051221377ee9876ba85bb9d28fd5817b818ed479f77e72ddb37482dad84a960b8d3cb040b6b0e4c9bba968ce3eac9950f7b"' :
                                        'id="xs-injectables-links-module-GenreModule-2c8a44301fdf7450744b2927044ef051221377ee9876ba85bb9d28fd5817b818ed479f77e72ddb37482dad84a960b8d3cb040b6b0e4c9bba968ce3eac9950f7b"' }>
                                        <li class="link">
                                            <a href="injectables/GenreService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenreService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' : 'data-target="#xs-injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' :
                                        'id="xs-injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProfileModule-a1b359a1cda21a4f941455074b27e76834878e58761dcf69487a572d97ad03d84c93b21094fbd56074aefe2b0dcc910812ee269676bb98982d6631d8a94fb73e"' : 'data-target="#xs-controllers-links-module-ProfileModule-a1b359a1cda21a4f941455074b27e76834878e58761dcf69487a572d97ad03d84c93b21094fbd56074aefe2b0dcc910812ee269676bb98982d6631d8a94fb73e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-a1b359a1cda21a4f941455074b27e76834878e58761dcf69487a572d97ad03d84c93b21094fbd56074aefe2b0dcc910812ee269676bb98982d6631d8a94fb73e"' :
                                            'id="xs-controllers-links-module-ProfileModule-a1b359a1cda21a4f941455074b27e76834878e58761dcf69487a572d97ad03d84c93b21094fbd56074aefe2b0dcc910812ee269676bb98982d6631d8a94fb73e"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProfileModule-a1b359a1cda21a4f941455074b27e76834878e58761dcf69487a572d97ad03d84c93b21094fbd56074aefe2b0dcc910812ee269676bb98982d6631d8a94fb73e"' : 'data-target="#xs-injectables-links-module-ProfileModule-a1b359a1cda21a4f941455074b27e76834878e58761dcf69487a572d97ad03d84c93b21094fbd56074aefe2b0dcc910812ee269676bb98982d6631d8a94fb73e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-a1b359a1cda21a4f941455074b27e76834878e58761dcf69487a572d97ad03d84c93b21094fbd56074aefe2b0dcc910812ee269676bb98982d6631d8a94fb73e"' :
                                        'id="xs-injectables-links-module-ProfileModule-a1b359a1cda21a4f941455074b27e76834878e58761dcf69487a572d97ad03d84c93b21094fbd56074aefe2b0dcc910812ee269676bb98982d6631d8a94fb73e"' }>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-8a1951f8e4b9eb12a60999432c9da880ff26ae15dec8a0b541d55e49cdd3a998c4852c1fbd0382cee3b7b98ba4f86b98cf4f9c45ec7a003989709375d45818fc"' : 'data-target="#xs-controllers-links-module-UsersModule-8a1951f8e4b9eb12a60999432c9da880ff26ae15dec8a0b541d55e49cdd3a998c4852c1fbd0382cee3b7b98ba4f86b98cf4f9c45ec7a003989709375d45818fc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-8a1951f8e4b9eb12a60999432c9da880ff26ae15dec8a0b541d55e49cdd3a998c4852c1fbd0382cee3b7b98ba4f86b98cf4f9c45ec7a003989709375d45818fc"' :
                                            'id="xs-controllers-links-module-UsersModule-8a1951f8e4b9eb12a60999432c9da880ff26ae15dec8a0b541d55e49cdd3a998c4852c1fbd0382cee3b7b98ba4f86b98cf4f9c45ec7a003989709375d45818fc"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-8a1951f8e4b9eb12a60999432c9da880ff26ae15dec8a0b541d55e49cdd3a998c4852c1fbd0382cee3b7b98ba4f86b98cf4f9c45ec7a003989709375d45818fc"' : 'data-target="#xs-injectables-links-module-UsersModule-8a1951f8e4b9eb12a60999432c9da880ff26ae15dec8a0b541d55e49cdd3a998c4852c1fbd0382cee3b7b98ba4f86b98cf4f9c45ec7a003989709375d45818fc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-8a1951f8e4b9eb12a60999432c9da880ff26ae15dec8a0b541d55e49cdd3a998c4852c1fbd0382cee3b7b98ba4f86b98cf4f9c45ec7a003989709375d45818fc"' :
                                        'id="xs-injectables-links-module-UsersModule-8a1951f8e4b9eb12a60999432c9da880ff26ae15dec8a0b541d55e49cdd3a998c4852c1fbd0382cee3b7b98ba4f86b98cf4f9c45ec7a003989709375d45818fc"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateFavoriteDto.html" data-type="entity-link" >CreateFavoriteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGameDto.html" data-type="entity-link" >CreateGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGenreDto.html" data-type="entity-link" >CreateGenreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProfileDto.html" data-type="entity-link" >CreateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Favorite.html" data-type="entity-link" >Favorite</a>
                            </li>
                            <li class="link">
                                <a href="classes/Game.html" data-type="entity-link" >Game</a>
                            </li>
                            <li class="link">
                                <a href="classes/Genre.html" data-type="entity-link" >Genre</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFavoriteDto.html" data-type="entity-link" >UpdateFavoriteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGameDto.html" data-type="entity-link" >UpdateGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGenreDto.html" data-type="entity-link" >UpdateGenreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProfileDto.html" data-type="entity-link" >UpdateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});