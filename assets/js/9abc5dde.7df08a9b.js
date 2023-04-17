"use strict";(self.webpackChunkclean_hexagonal_onion_docs=self.webpackChunkclean_hexagonal_onion_docs||[]).push([[306],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||r;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const r={sidebar_position:6},i="6: Hands-On: Fire a Domain Event",s={unversionedId:"process-adapter",id:"process-adapter",title:"6: Hands-On: Fire a Domain Event",description:"We still want to publish a book. We know all available publishers from the previous section and made it available in",source:"@site/docs/6.process-adapter.md",sourceDirName:".",slug:"/process-adapter",permalink:"/tackle-eventual-consistency-witch-domain-events/docs/process-adapter",draft:!1,editUrl:"https://github.com/MaikKingma/tackle-eventual-consistency-with-domain-events-docs/docs/6.process-adapter.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5: Hands-On - Set up the App",permalink:"/tackle-eventual-consistency-witch-domain-events/docs/setting-up-an-initial-application"}},l={},p=[{value:"The command",id:"the-command",level:3},{value:"1. Task: Implement the Publisher ACL adapter.",id:"1-task-implement-the-publisher-acl-adapter",level:3},{value:"2. Task: Implement the Book Command",id:"2-task-implement-the-book-command",level:3},{value:"3. Task: Implement the flow",id:"3-task-implement-the-flow",level:3},{value:"5. Task: Implement the domain event",id:"5-task-implement-the-domain-event",level:3},{value:"6. Task: Consume the published domain event.",id:"6-task-consume-the-published-domain-event",level:3},{value:"7. Task: Delegate Implementation",id:"7-task-delegate-implementation",level:3},{value:"Validate",id:"validate",level:3}],u={toc:p},c="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"6-hands-on-fire-a-domain-event"},"6: Hands-On: Fire a Domain Event"),(0,a.kt)("p",null,"We still want to publish a book. We know all available publishers from the previous section and made it available in\nour bounded context."),(0,a.kt)("p",null,"Assuming we have already created a manuscript as an author, we can now decide to publish that manuscript with one of\nthe available publishers."),(0,a.kt)("h3",{id:"the-command"},"The command"),(0,a.kt)("p",null,"For that purpose we create the ",(0,a.kt)("inlineCode",{parentName:"p"},"/commands/book/BookCommands.java")," class containing our new command API endpoint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},'POST /books/{id}/commands/publish HTTP/1.1\nHost: localhost:8080\nContent-Type: application/json\n\n{\n  "publisherId": "80553ae1-2ef8-4adf-8fa8-d551684a9ea3"\n}\n')),(0,a.kt)("p",null,"The behaviour of this endpoint should comply with the following functional requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A book can only be published with a publisher that actually exits. SO, we need to validate that the chosen\npublisher exists in the source context of publishers, the publisher service."),(0,a.kt)("li",{parentName:"ul"},"We want the publishing to happen asynchronous, i.e. our command should simply return that it accepted the\npublishing request, and it will be passed on for further processing. (Eventual Consistency).")),(0,a.kt)("p",null,"We achieve this passing on for further processing by publishing a domain event, you can find extra reference ","[here]","\n(",(0,a.kt)("a",{parentName:"p",href:"https://bit.ly/3Fs9Cy4"},"https://bit.ly/3Fs9Cy4"),")."),(0,a.kt)("p",null,"While it looks easy at first sight, we need to invest a little more coding effort than Baeldung because we\nsegregated the data entity from the actual domain aggregate."),(0,a.kt)("h3",{id:"1-task-implement-the-publisher-acl-adapter"},"1. Task: Implement the Publisher ACL adapter."),(0,a.kt)("p",null,"First things first: in order to validate the existence of a publisher by id, the third party publisher service from the\nprevious section exposes the following endpoint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"### Get authors\nGET /publishers/{id} HTTP/1.1\nHost: localhost:8081\nAccept: application/json\n")),(0,a.kt)("p",null,"implement this in our ACL adapter. We need to expose some sort of interface to our later book command REST controller\nthat we can inject."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Hint:")," Consider our application & domain service pattern. Since Publishers do not have a life cycle within our\ncontext, which would you choose?")),(0,a.kt)("h3",{id:"2-task-implement-the-book-command"},"2. Task: Implement the Book Command"),(0,a.kt)("p",null,"implement our new book commands endpoint and for now only log the response of the getPublisherById call you\nimplemented in step 1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},'POST /books/{id}/commands/publish HTTP/1.1\nHost: localhost:8080\nContent-Type: application/json\n\n{\n  "publisherId": "6b4ca9c9-b3ae-4130-b3f8-2da873c3940e"\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Hint:")," You can always verify that you used the correct patterns by running our\n",(0,a.kt)("inlineCode",{parentName:"p"},"eu/javaland/clean_hexagonal_onion/CleanHexagonalOnionArchitectureTest.java"),".")),(0,a.kt)("h3",{id:"3-task-implement-the-flow"},"3. Task: Implement the flow"),(0,a.kt)("p",null,"We now have a publisher that we want to publish with. Next, we need to retrieve the book corresponding to the ID form\nthe path parameter, check that it exists, then in step 4, register it for publishing."),(0,a.kt)("p",null,"Following our flow pattern, we introduce the class\n",(0,a.kt)("inlineCode",{parentName:"p"},"eu/javaland/clean_hexagonal_onion/domaininteraction/publisher/PublisherFlow.java"),". You may ask at this point, why\na PublisherFlow and not a BookFLow. This is a bit of a taste question. My reasoning is that there would be no\npublishing without a publisher existing, so I chose that flow. But you could equally reason, that you can only\npublish a book that exists. So this is eventually up to the architect to decide. Both are correct."),(0,a.kt)("p",null,"Here is a test for some TDD:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@ExtendWith(MockitoExtension.class)\nclass PublisherFlowTest {\n\n    @Mock\n    private PublisherAppService publisherAppService;\n\n    @Mock\n    private BookDataService bookDataService;\n\n    @InjectMocks\n    private PublisherFlow publisherFlow;\n\n    @Test\n    void publishBook_success() {\n        // given\n        UUID publisherId = UUID.randomUUID();\n        var authorDTO = new AuthorDTO(1L, "firstName", "lastName");\n        var bookDTO = new BookDTO(1L, authorDTO, "title", "description", null, false, null);\n        var publisherDTO = new PublisherDTO(publisherId,\n                "publisherName");\n        when(publisherAppService.getPublisherById(publisherId.toString())).thenReturn(publisherDTO);\n        when(bookDataService.findById(1L)).thenReturn(bookDTO);\n        // when\n        publisherFlow.publishBook(1L, publisherId.toString());\n        // then\n        ArgumentCaptor<BookDTO> argumentCaptor = ArgumentCaptor.forClass(BookDTO.class);\n        verify(bookDataService, times(1)).save(argumentCaptor.capture());\n        var capturedArg = argumentCaptor.getValue();\n        assertThat(capturedArg.publisherId()).isEqualTo(publisherId);\n        assertThat(capturedArg.isPublished()).isFalse();\n    }\n\n    @Test\n    void publishBook_failure_publisherNotFound() {\n        // given\n        UUID publisherId = UUID.randomUUID();\n        when(publisherAppService.getPublisherById(publisherId.toString())).thenThrow(\n                new PublisherAppService.PublisherNotFoundException("Publisher not found!"));\n        // when then\n        assertThrows(PublisherAppService.PublisherNotFoundException.class, () -> publisherFlow.publishBook(1L,\n                publisherId.toString()));\n    }\n\n    @Test\n    void publishBook_failure_bookNotFound() {\n        // given\n        UUID publisherId = UUID.randomUUID();\n        var publisherDTO = new PublisherDTO(publisherId,\n                "publisherName");\n        when(publisherAppService.getPublisherById(publisherId.toString())).thenReturn(publisherDTO);\n        when(bookDataService.findById(1L)).thenThrow(new BookDataService.BookNotFoundException("Book not found!"));\n        // when then\n        assertThrows(BookDataService.BookNotFoundException.class, () -> publisherFlow.publishBook(1L,\n                publisherId.toString()));\n    }\n\n    @Test\n    void publishBook_failure_bookAlreadyInPublishing() {\n        // given\n        UUID publisherId = UUID.randomUUID();\n        var authorDTO = new AuthorDTO(1L, "firstName", "lastName");\n        var bookDTO = new BookDTO(1L, authorDTO, "title", "description", UUID.randomUUID(), false, null,\n                new ArrayList<>());\n        var publisherDTO = new PublisherDTO(publisherId,\n                "publisherName");\n        when(publisherAppService.getPublisherById(publisherId.toString())).thenReturn(publisherDTO);\n        when(bookDataService.findById(1L)).thenReturn(bookDTO);\n        // when\n        assertThrows(PublisherFlow.BookAlreadyInPublishingException.class, () -> publisherFlow.publishBook(1L,\n                publisherId.toString()));\n    }\n}\n')),(0,a.kt)("h3",{id:"5-task-implement-the-domain-event"},"5. Task: Implement the domain event"),(0,a.kt)("p",null,"We want to allow a publishing request and, since we aim for eventual consistency, the publishing of a related domain\nevent, that can be consumed later on by our process adapter.\nTo be able to handle domain events we need a new dependency in our ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.data</groupId>\n    <artifactId>spring-data-commons</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"The challenge of this task is to actually register domain events on the domain, but then also propagate them to\nthe actual JPA entity which will eventually be persisted by the Repository, which in turn will trigger the handling of\ndomain events in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractAggregateRoot.java"),". If we send domain events from the domain already, we\ncould encounter a chicken and egg problem, since the domain event would be sent before the JPA entity is persisted."),(0,a.kt)("p",null,"Here are some useful snippets. Can you place them in the correct places?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    @Getter\n    private final List<DomainEvent> domainEvents = new ArrayList<>();\n")),(0,a.kt)("p",null,"Our Domain event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    @Value\n    public static class RequestPublishingEvent extends DomainEvent {\n        Long bookId;\n        UUID publisherId;\n    }\n    // and\n    public abstract class DomainEvent {}\n")),(0,a.kt)("p",null,"The following snippet provides us the support of handling the Domain events correctly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class BookJPA extends AbstractAggregateRoot<BookJPA> {\n    // ...\n    public void registerDomainEvents(List<DomainEvent> domainEvents) {\n      domainEvents.forEach(this::andEvent);\n    }\n}\n")),(0,a.kt)("p",null,"In case of our domain events, we will slightly loosen our architecture rules sets and allow the process adapter to\nknow about our domain events. This is because we want to be able to consume them in the process adapter. THe same\ngoes for the DomainEvent.class in the data adapter. JPA needs to know about our domain events to be able to fire the\nevents when the JPA entity is persisted. Here is an updated ArchUnit test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@AnalyzeClasses(packages = "eu.javaland.clean_hexagonal_onion", importOptions = {ImportOption.DoNotIncludeTests.class})\npublic class CleanHexagonalOnionArchitectureTest {\n\n    @ArchTest\n    static final ArchRule layer_dependencies_are_respected =\n            layeredArchitecture().consideringAllDependencies()\n\n                    .layer("command").definedBy("eu.javaland.clean_hexagonal_onion.command..")\n                    .layer("query").definedBy("eu.javaland.clean_hexagonal_onion.query..")\n                    .layer("data").definedBy("eu.javaland.clean_hexagonal_onion.data..")\n                    .layer("acl").definedBy("eu.javaland.clean_hexagonal_onion.acl..")\n                    .layer("process").definedBy("eu.javaland.clean_hexagonal_onion.process..")\n                    .layer("domain interaction").definedBy("eu.javaland.clean_hexagonal_onion.domaininteraction..")\n                    .layer("domain").definedBy("eu.javaland.clean_hexagonal_onion.domain..")\n\n                    .whereLayer("command").mayNotBeAccessedByAnyLayer()\n                    .whereLayer("query").mayNotBeAccessedByAnyLayer()\n                    .whereLayer("data").mayNotBeAccessedByAnyLayer()\n                    .whereLayer("acl").mayNotBeAccessedByAnyLayer()\n                    .whereLayer("process").mayNotBeAccessedByAnyLayer()\n                    .whereLayer("domain interaction").mayOnlyBeAccessedByLayers("command", "query", "data", "acl", "process")\n                    .whereLayer("domain").mayOnlyBeAccessedByLayers("domain interaction")\n                    // we will ignore the Domain Event dependencies from the process layer to the domain layer\n                    // We are eventually trying to solve complexity, not add to it. Adding another layer to solve\n                    // this would be overkill and overcomplicate things\n                    .ignoreDependency(EventProcessor.class, Book.RequestPublishingEvent.class)\n                    .ignoreDependency(PublishBookDelegate.class, Book.RequestPublishingEvent.class)\n                    .ignoreDependency(BookJPA.class, DomainEvent.class)\n            ;\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Some classes in this test are not yet implemented. We will do that in the next tasks")),(0,a.kt)("p",null,"In the class ",(0,a.kt)("inlineCode",{parentName:"p"},"Book.java")," we need to implement the method requestPublishing(id: UUID) which we previously referenced in\ntask 4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    public void requestPublishing(UUID publisherId) {\n        // TODO assign the publisherID to the book, in our business logic this means that the book is now in the \n        // process of being published\n        // TODO create a domain event and add it to the domainEvents list\n    }\n")),(0,a.kt)("p",null,"Having done all that, the ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractAggregateRoot")," will do the publishing of the domain events for us at the moment\nof object persistence. So on to the next task: we need to be able to consume these events in the process adapter."),(0,a.kt)("h3",{id:"6-task-consume-the-published-domain-event"},"6. Task: Consume the published domain event."),(0,a.kt)("p",null,"Create a class ",(0,a.kt)("inlineCode",{parentName:"p"},"/process/EventProcessor.java"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import lombok.extern.slf4j.Slf4j;\nimport nl.theexperts.clean_hexagonal_onion_service.domain.book.Book;\nimport nl.theexperts.clean_hexagonal_onion_service.process.book.PublishBookDelegate;\nimport org.springframework.scheduling.annotation.Async;\nimport org.springframework.stereotype.Component;\nimport org.springframework.transaction.event.TransactionalEventListener;\n\nimport static org.springframework.transaction.event.TransactionPhase.AFTER_COMMIT;\n\n@Slf4j\n@Component\npublic class EventProcessor {\n\n    private final PublishBookDelegate publishBookDelegate;\n\n    public EventProcessor(PublishBookDelegate publishBookDelegate) {\n        this.publishBookDelegate = publishBookDelegate;\n    }\n    \n    @TransactionalEventListener(phase = AFTER_COMMIT)\n    public void handleEvent(Book.RequestPublishingEvent requestPublishingEvent) {\n        log.info(requestPublishingEvent.toString());\n        publishBookDelegate.publishBook(requestPublishingEvent);\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Hint:")," TransactionalEventListener is a Spring feature that allows you to listen to events that are published within a\ntransaction. This is useful for publishing events that are triggered by a command. The event is only published if\nthe transaction is committed successfully. If the transaction is rolled back, the event is not published.")),(0,a.kt)("p",null,"This implementation will allow for the domain events on a JPA entity to be processed after the transaction was\ncommitted."),(0,a.kt)("h3",{id:"7-task-delegate-implementation"},"7. Task: Delegate Implementation"),(0,a.kt)("p",null,"Now try to actually implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"/process/book/PublishBookDelegate.java")," class."),(0,a.kt)("p",null,"Useful snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Service\npublic class PublishBookDelegate {\n\n  private final BookService bookService;\n  private final PublisherService publisherService;\n\n\n  public PublishBookDelegate(BookService bookService, PublisherService publisherService) {\n    this.bookService = bookService;\n    this.publisherService = publisherService;\n  }\n\n  @Transactional(propagation = REQUIRES_NEW)\n  public void publishBook(Book.RequestPublishingEvent event) {\n    // retrieve book by id from event\n    \n   // request the publishing of the book via the Publisher ACL layer (also see API docs below)\n\n    // update the isbn of the book you received as a response and then store the book\n  }\n}\n")),(0,a.kt)("p",null,"The API on the publisher service is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},'POST /publishers/receiveBookOffer\nHost: localhost:8081\nContent-Type: application/json\n\n{\n  "publisherId": "<SOME-UUID>",\n  "author": "author name",\n  "title": "Cool Title"\n}\n\nReturns:\n{\n  "isbn": "ISBN-3895b77d-ee27-40de-9b08-bf24fe2a013a"\n}\n')),(0,a.kt)("h3",{id:"validate"},"Validate"),(0,a.kt)("p",null,"Let's test your implementation:"),(0,a.kt)("p",null,"Testing the endpoint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import com.fasterxml.jackson.databind.ObjectMapper;\nimport jakarta.persistence.EntityManager;\nimport jakarta.transaction.Transactional;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.mockserver.client.MockServerClient;\nimport org.mockserver.model.Header;\nimport org.mockserver.springtest.MockServerTest;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.http.MediaType;\nimport org.springframework.test.web.servlet.MockMvc;\n\nimport javax.json.Json;\nimport java.util.UUID;\nimport java.util.concurrent.TimeUnit;\n\nimport static org.mockserver.matchers.Times.exactly;\nimport static org.mockserver.model.HttpRequest.request;\nimport static org.mockserver.model.HttpResponse.response;\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;\n\n@MockServerTest\n@SpringBootTest\n@AutoConfigureMockMvc\nclass BookCommandsTest {\n\n  private static final Long BOOK_ID = 1L;\n  private static final Long AUTHOR_ID = 2L;\n\n  @Autowired\n  private MockMvc mockMvc;\n\n  @Autowired\n  private ObjectMapper objectMapper;\n\n  @Autowired\n  private EntityManager entityManager;\n\n  private MockServerClient mockServerClient;\n\n  @BeforeEach\n  void beforeAll() {\n    entityManager.createNativeQuery("DELETE FROM author where true; DELETE FROM book where true;")\n            .executeUpdate();\n  }\n\n  @Test\n  @Transactional\n  void publishBook() throws Exception {\n    // given\n    UUID publisherUUID = UUID.randomUUID();\n    configureMockGetPublisherById(publisherUUID.toString());\n    entityManager.createNativeQuery(\n                    "INSERT INTO author (id, first_name, last_name) VALUES (?,?,?)")\n            .setParameter(1, AUTHOR_ID)\n            .setParameter(2, "firstName")\n            .setParameter(3, "lastName")\n            .executeUpdate();\n\n    entityManager.createNativeQuery(\n                    "INSERT INTO book (id, title, author_id, genre, published, publisher_id, isbn) " +\n                            "VALUES (?,?,?,?,?,?,?)")\n            .setParameter(1, BOOK_ID)\n            .setParameter(2, "title")\n            .setParameter(3, AUTHOR_ID)\n            .setParameter(4, "HORROR")\n            .setParameter(5, false)\n            .setParameter(6, null)\n            .setParameter(7, null)\n            .executeUpdate();\n\n    entityManager.flush();\n\n    var publishBookPayload = objectMapper.writeValueAsString(new PublishBookPayload(publisherUUID.toString()));\n    // when\n    mockMvc.perform(post(String.format("/books/%d/commands/publish", BOOK_ID))\n                    .contentType(MediaType.APPLICATION_JSON)\n                    .content(publishBookPayload))\n            .andExpect(status().isAccepted());\n  }\n\n  private void configureMockGetPublisherById(String publisherId) {\n    var responseBody = Json.createObjectBuilder()\n            .add("id", publisherId)\n            .add("name", "the/experts")\n            .add("taxNumber", "VAT12345")\n            .add("numberOfEmployees", 30)\n            .add("yearlyRevenueInMillions", 99)\n            .add("amountOfBooksPublished", 20)\n            .build().toString();\n\n    mockServerClient.when(request().withMethod("GET").withPath("/publishers/" + publisherId), exactly(1)).respond(\n            response()\n                    .withStatusCode(200)\n                    .withHeaders(new Header("Content-Type", "application/json; charset=utf-8"))\n                    .withBody(responseBody)\n                    .withDelay(TimeUnit.SECONDS,1)\n    );\n  }\n}\n')),(0,a.kt)("p",null,"Testing the event publishing:\n",(0,a.kt)("inlineCode",{parentName:"p"},"src/test/java/eu/javaland/clean_hexagonal_onion/data/book/BookJPATest.java")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," We are wiring the actual repositories in this test scenario. We need them to handle the transactions\ncorrectly for us.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import eu.javaland.clean_hexagonal_onion.data.author.AuthorJPA;\nimport eu.javaland.clean_hexagonal_onion.data.author.AuthorRepository;\nimport eu.javaland.clean_hexagonal_onion.domain.book.Book;\nimport eu.javaland.clean_hexagonal_onion.domaininteraction.author.AuthorDTO;\nimport eu.javaland.clean_hexagonal_onion.domaininteraction.book.BookDTO;\nimport eu.javaland.clean_hexagonal_onion.domaininteraction.book.BookDataService;\nimport jakarta.persistence.EntityManager;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.mockito.ArgumentCaptor;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.boot.test.mock.mockito.MockBean;\nimport org.springframework.test.context.junit.jupiter.SpringJUnitConfig;\nimport org.springframework.transaction.event.TransactionalEventListener;\n\nimport java.util.List;\nimport java.util.UUID;\n\nimport static org.mockito.Mockito.times;\nimport static org.mockito.Mockito.verify;\n\n@SpringJUnitConfig\n@SpringBootTest\nclass BookJPATest {\n\n  @MockBean\n  private TestEventHandler eventHandler;\n\n  @Autowired\n  private AuthorRepository authorRepository;\n\n  @Autowired\n  private BookRepository bookRepository;\n\n  @Autowired\n  private BookDataService bookDataService;\n\n  @Autowired\n  private EntityManager entityManager;\n\n  @BeforeEach\n  void beforeAll() {\n    authorRepository.deleteAll();\n    bookRepository.deleteAll();\n  }\n\n  @Test\n  void shouldPublishEventOnSavingAggregate() {\n    var authorJPA = AuthorJPA.builder().firstName("first").lastName("last").build();\n    authorRepository.save(authorJPA);\n    authorJPA = authorRepository.findAll().get(0);\n\n    UUID publisherId = UUID.randomUUID();\n    AuthorDTO authorDTO = new AuthorDTO(authorJPA.getId(), authorJPA.getFirstName(),\n            authorJPA.getLastName());\n    var bookDTO = new BookDTO(1L, authorDTO, "Title"\n            , "Horror",\n            publisherId,\n            false,\n            null, List.of(new Book.RequestPublishingEvent(1L, publisherId)));\n    // when\n    bookDataService.save(bookDTO);\n    // then\n    ArgumentCaptor<Book.RequestPublishingEvent> argumentCaptor = ArgumentCaptor.forClass(Book.RequestPublishingEvent.class);\n    verify(eventHandler, times(1)).handleEvent(argumentCaptor.capture());\n  }\n\n  interface TestEventHandler {\n    @TransactionalEventListener()\n    void handleEvent(Book.RequestPublishingEvent event);\n\n  }\n}\n')),(0,a.kt)("p",null,"Testing the event processor in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/test/.../process/EventProcessorTest.java"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import nl.theexperts.clean_hexagonal_onion_service.domain.book.Book;\nimport nl.theexperts.clean_hexagonal_onion_service.process.book.PublishBookDelegate;\nimport org.junit.jupiter.api.Test;\nimport org.mockito.InjectMocks;\nimport org.mockito.Mock;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.test.context.junit.jupiter.SpringJUnitConfig;\n\nimport java.util.UUID;\n\nimport static org.mockito.Mockito.times;\nimport static org.mockito.Mockito.verify;\n\n@SpringJUnitConfig\n@SpringBootTest\nclass EventProcessorTest {\n\n  @Mock\n  private PublishBookDelegate publishBookDelegate;\n\n  @InjectMocks\n  private EventProcessor eventProcessor;\n\n  @Test\n  void shouldCallTheDelegateToActOnEvent() {\n    // when\n    Book.RequestPublishingEvent requestPublishingEvent = new Book.RequestPublishingEvent(1L, UUID.randomUUID());\n    eventProcessor.handleEvent(requestPublishingEvent);\n    // then\n    verify(publishBookDelegate, times(1)).publishBook(requestPublishingEvent);\n  }\n}\n")),(0,a.kt)("p",null,"Testing the delegate and ACL interaction in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/test/.../process/book/PublishBookDelegateTest.java"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import eu.javaland.clean_hexagonal_onion.domain.book.Book;\nimport eu.javaland.clean_hexagonal_onion.domaininteraction.book.BookDTO;\nimport eu.javaland.clean_hexagonal_onion.domaininteraction.book.BookDataService;\nimport eu.javaland.clean_hexagonal_onion.domaininteraction.book.BookFlow;\nimport jakarta.persistence.EntityManager;\nimport jakarta.transaction.Transactional;\nimport org.junit.jupiter.api.Test;\nimport org.mockserver.client.MockServerClient;\nimport org.mockserver.model.Header;\nimport org.mockserver.springtest.MockServerTest;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\n\nimport javax.json.Json;\nimport java.util.UUID;\nimport java.util.concurrent.TimeUnit;\n\nimport static org.assertj.core.api.Assertions.assertThat;\nimport static org.mockserver.matchers.Times.exactly;\nimport static org.mockserver.model.HttpRequest.request;\nimport static org.mockserver.model.HttpResponse.response;\n\n@MockServerTest\n@SpringBootTest\nclass PublishBookDelegateTest {\n\n    private static final Long BOOK_ID = 1L;\n    private static final Long AUTHOR_ID = 2L;\n\n    @Autowired\n    private BookFlow bookFlow;\n\n    @Autowired\n    private BookDataService bookDataService;\n\n    private MockServerClient mockServerClient;\n\n    @Autowired\n    private EntityManager entityManager;\n\n    @Test\n    @Transactional\n    void shouldCallThePublisherServiceAPIWithCorrectPayload() {\n        PublishBookDelegate publishBookDelegate = new PublishBookDelegate(bookFlow);\n        UUID publisherUUID = UUID.randomUUID();\n        UUID isbnUUID = UUID.randomUUID();\n        configureMockPublishersReceiveBookOffer(isbnUUID.toString());\n\n        entityManager.createNativeQuery(\n                        "INSERT INTO author (id, first_name, last_name) VALUES (?,?,?)")\n                .setParameter(1, AUTHOR_ID)\n                .setParameter(2, "firstName")\n                .setParameter(3, "lastName")\n                .executeUpdate();\n\n        entityManager.createNativeQuery(\n                        "INSERT INTO book (id, title, author_id, genre, published, publisher_id, isbn) " +\n                                "VALUES (?,?,?,?,?,?,?)")\n                .setParameter(1, BOOK_ID)\n                .setParameter(2, "title")\n                .setParameter(3, AUTHOR_ID)\n                .setParameter(4, "HORROR")\n                .setParameter(5, false)\n                .setParameter(6, null)\n                .setParameter(7, null)\n                .executeUpdate();\n\n        entityManager.flush();\n        BookDTO checkBook = bookDataService.findById(BOOK_ID);\n        assertThat(checkBook.published()).isFalse();\n        assertThat(checkBook.isbn()).isNull();\n        // when\n        publishBookDelegate.publishBook(new Book.RequestPublishingEvent(BOOK_ID, publisherUUID));\n        // then\n        mockServerClient.verify(request()\n                .withPath("/publishers/receiveBookOffer")\n                .withMethod("POST")\n                .withBody(Json.createObjectBuilder()\n                        .add("publisherId", publisherUUID.toString())\n                        .add("author", "firstName lastName")\n                        .add("title", "title")\n                        .build().toString()));\n        BookDTO resultBook = bookDataService.findById(BOOK_ID);\n        assertThat(resultBook.published()).isTrue();\n        assertThat(resultBook.isbn()).isEqualTo(String.format("ISBN-%s", isbnUUID));\n\n    }\n\n    private void configureMockPublishersReceiveBookOffer(String uuid) {\n        var responseBody = Json.createObjectBuilder()\n                .add("isbn", String.format("ISBN-%s", uuid))\n                .build().toString();\n\n        mockServerClient.when(request().withMethod("POST").withPath("/publishers/receiveBookOffer"), exactly(1)).respond(\n                response()\n                        .withStatusCode(202)\n                        .withHeaders(new Header("Content-Type", "application/json; charset=utf-8"))\n                        .withBody(responseBody)\n                        .withDelay(TimeUnit.SECONDS,1)\n        );\n    }\n}\n')),(0,a.kt)("p",null,"Give it a try!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'if (allTestsGreen == true) {\n    log.info("DONE! You finished the workshop!");\nelse{\n    log.error("Shout for help!") || (git stash && git checkout 10-process-adapter-done)\n}\n')))}h.isMDXComponent=!0}}]);